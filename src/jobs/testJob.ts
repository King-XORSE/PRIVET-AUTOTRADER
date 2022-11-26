import axios from "axios";
import makeRequest from "@/utils/makeRequest";
import { configs } from "@/configs";
import { CronJob } from "cron";

const getAsset = async function () {
  const token = makeRequest();

  const _result = await axios({
    method: "GET",
    url: configs.apiUrl + configs.apiType.account,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  if (_result) {
    console.log(_result.data);
    return _result.data;
  }
  return [];
};

export default new CronJob(
  "*/2 * * * * *",
  getAsset,
  null,
  false,
  "Asia/Seoul"
);
