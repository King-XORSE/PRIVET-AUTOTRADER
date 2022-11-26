import { CronJob } from "cron";
import testJob from "./testJob";
export default async function (): Promise<Array<CronJob>> {
  //
  let retArray: Array<CronJob> = [];
  retArray.push(testJob);
  return retArray;
}
