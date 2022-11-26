// import databaseLoader from "./databaseLoader";
// import dependencyInjectorLoader from "./dependencyInjector";
import Logger from "./loggerLoader";

export default async function ({ expressApp }) {
  // await databaseLoader();
  Logger.info("DB loaded and connected!");

  // await dependencyInjectorLoader({
  //   // TODO: 필요한 스키마 추가할 것.
  //   models: [require("../models/Staff").default].concat(
  //     require("../models/Adapter").default
  //   )
  // });

  Logger.info("Dependency Injector loaded");

  // await expressLoader({ app: expressApp });

  Logger.info("Express has loaded.");
}
