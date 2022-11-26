/**
 * PRE-requisite function.
 *
 * check env files and set module import method.
 */
import dotenv from "dotenv";
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Could't find .env file... ");
}

import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);

/**
 * Main Loop here.
 */
import "reflect-metadata"; // We need this in order to use @Decorators
import { configs } from "@/configs";
import { CronJob } from "cron";

import Logger from "@/loaders/loggerLoader";

async function StartServer() {
  // await require("./loaders").default({ expressApp: app });
  const logics: Array<CronJob> = await require("./jobs").default();
  console.log(">>>", logics);

  logics.forEach(job => {
    job.start();
  });

  Logger.info(`[EXPRESS] Server Url is ${configs.appUrl}`);

  Logger.info(`[EXPRESS]
####################################################################################################

>>> Version : ${configs.appVersion}
>>> Applied_Commit : [${configs.appDeployDate}] : ${configs.appCommit}

####################################################################################################
`);
}

StartServer();
