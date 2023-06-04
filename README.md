# bigquery-ts-sample

```
brew install --cask google-cloud-sdk
gcloud auth application-default login
bq show --project_id=bigquery-public-data --format=prettyjson sec_quarterly_financials.calculation \
    | jq '.schema.fields' > schema.json
npm install
npx bigquery-ts generate:file ./schema.json --output ./@types
npm run test
```

# docs

- https://github.com/googleapis/nodejs-bigquery/tree/main/samples
- https://github.com/propps-au/bigquery-ts
  - issue: `INTEGER` must be convert to `INT64`: https://github.com/propps-au/bigquery-ts/blob/3bb568211adfdb596b5281ed9a9a8403d7990f96/src/parser/schema.ts#L12
