# Deploy su AWS: S3 + CloudFront

Il sito è esportato come **static site** (`next.config.ts` → `output: "export"`). Build → cartella `out/`.

## Prerequisiti

- Account AWS, [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) configurato (`aws configure`).
- **Nome bucket univoco** a livello globale (es. `miodominio-www-prod`).

## Prima volta (infrastruttura + upload)

```bash
cd alertdottore-nextjs
chmod +x scripts/deploy-s3-cloudfront.sh

# Opzionale: export BUCKET_NAME="nome-unioco"
# Altrimenti lo script usa alertdottore-static-<ACCOUNT_ID>
export AWS_REGION="eu-south-1"   # se non è già in aws configure

./scripts/deploy-s3-cloudfront.sh
```

Lo script:

1. Fa `cloudformation deploy` con `infra/aws-static-site.yaml` (bucket privato, CloudFront con **OAC**, errori 403/404 → `index.html` per eventuali path client-side in futuro).
2. `npm run build` (genera `out/`).
3. `aws s3 sync out/ s3://$BUCKET_NAME --delete`.
4. Invalida la cache CloudFront su `/*`.

In output vedi l’URL `https://xxxx.cloudfront.net`.

## Deploy successivi

Stesso comando: aggiorna stack se cambi il template; altrimenti rifà sync + invalidation.

## Modulo contatti → email (senza SMTP)

Usiamo [Web3Forms](https://web3forms.com/): crei l’account, verifichi la mail dove vuoi ricevere i messaggi, copi la **Access Key**.

```bash
cp .env.example .env.local
# modifica .env.local:
# NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...

npm run build
AWS_REGION=eu-south-1 ./scripts/deploy-s3-cloudfront.sh
```

Le variabili `NEXT_PUBLIC_*` sono lette **al build**, non a runtime: ogni cambio chiave richiede rebuild + sync.

## Costo (ordine di grandezza)

- S3 + CloudFront a traffico basso: tipicamente **pochi $/mese** (o meno), senza EC2 acceso 24/7.
- `PriceClass_100` nel template = meno edge location, più economico.

## Dominio custom (opzionale)

1. Certificato **ACM in us-east-1** (CloudFront lo richiede per cert custom).
2. Aggiungi **Alternate Domain Names (CNAME)** sulla distribuzione + cert ARN (modifica manuale al template o secondo stack).
3. **Route 53**: alias A/AAAA verso la distribuzione.

## Nota su `output: "export"`

Se in futuro aggiungi **API Routes**, **SSR dinamico lato server**, ecc., questo modello non basta più: valuta Amplify, Lambda (OpenNext), o ECS.
