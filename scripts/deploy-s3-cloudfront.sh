#!/usr/bin/env bash
set -euo pipefail

# Uso:
#   ./scripts/deploy-s3-cloudfront.sh
#   (bucket default: alertdottore-static-<AWS_ACCOUNT_ID> se BUCKET_NAME non è impostato)
#
#   export BUCKET_NAME="tuo-bucket-unico"   # opzionale
#   export AWS_REGION="eu-south-1"          # opzionale, default da env/config
#   export STACK_NAME="medico-radar-static" # opzionale
#
# Prima esecuzione: crea stack CloudFormation, poi build Next, sync S3, invalidazione CF.

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

STACK_NAME="${STACK_NAME:-medico-radar-static}"
REGION="${AWS_REGION:-eu-south-1}"

if [[ -z "${BUCKET_NAME:-}" ]]; then
  ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text)"
  BUCKET_NAME="alertdottore-static-${ACCOUNT_ID}"
  echo "==> BUCKET_NAME non impostato → ${BUCKET_NAME}"
fi

echo "==> CloudFormation: stack ${STACK_NAME} (${REGION})"
aws cloudformation deploy \
  --template-file "${ROOT}/infra/aws-static-site.yaml" \
  --stack-name "${STACK_NAME}" \
  --parameter-overrides "BucketName=${BUCKET_NAME}" \
  --region "${REGION}"

DIST_ID="$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --region "${REGION}" \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)"

DOMAIN="$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --region "${REGION}" \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomain`].OutputValue' \
  --output text)"

echo "==> Next.js static export"
npm run build

echo "==> S3 sync -> s3://${BUCKET_NAME}"
aws s3 sync "${ROOT}/out/" "s3://${BUCKET_NAME}/" --delete --region "${REGION}"

echo "==> CloudFront invalidation"
aws cloudfront create-invalidation \
  --distribution-id "${DIST_ID}" \
  --paths "/*" \
  --output table

echo "Fatto. URL: https://${DOMAIN}"
