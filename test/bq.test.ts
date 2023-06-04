import { BigQuery, Job } from '@google-cloud/bigquery'
import { Schema } from '../@types/Schema'

const client = new BigQuery({
  projectId: 'bfw-devops'
})

test('BiqQueryをクエリできる', async () => {
  const limit = 3
  const [rows, _job] = await client.query({
    query: `SELECT * FROM \`bigquery-public-data.sec_quarterly_financials.calculation\` LIMIT @limit`,
    params: { limit },
  }) as [Schema[], Job]
  console.log(rows)
  expect(rows.map(({ submission_number }) => submission_number).filter(Boolean).length).toBe(limit)
})
