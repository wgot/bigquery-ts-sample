import {
  BigQueryDate,
  BigQueryDatetime,
  BigQueryTime,
  BigQueryTimestamp,
} from '@google-cloud/bigquery'
import { z } from 'zod'

const BigQueryTimestampSchema = z.instanceof(BigQueryTimestamp)
const BigQueryDateSchema = z.instanceof(BigQueryDate)
const BigQueryTimeSchema = z.instanceof(BigQueryTime)
const BigQueryDatetimeSchema = z.instanceof(BigQueryDatetime)

export const SchemaSchema = z.object({
    submission_number: z.string(),
    group: z.number(),
    arc: z.number(),
    negative: z.union([z.number(), z.undefined()]),
    parent_tag: z.union([z.string(), z.undefined()]),
    parent_version: z.union([z.string(), z.undefined()]),
    child_tag: z.union([z.string(), z.undefined()]),
    child_version: z.union([z.string(), z.undefined()])
});

export type Schema = {
    submission_number: string;
    group: number;
    arc: number;
    negative: number | undefined;
    parent_tag: string | undefined;
    parent_version: string | undefined;
    child_tag: string | undefined;
    child_version: string | undefined;
}