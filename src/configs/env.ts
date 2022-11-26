import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Could't find .env file... ");
}

export default {
  apiUrl: process.env.UPBIT_API_URL,
  apiType: {
    account: "accounts",
    order: "orders"
  },
  appUrl: process.env.APP_URL,
  appPort: parseInt(process.env.APP_PORT),
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
  mongoHostname: process.env.MONGODB_HOSTNAME,
  mongoDBname: process.env.MONGODB_DATABASE,
  mongoPassword: process.env.MONGODB_PASSWORD,
  mongoPort: process.env.MONGODB_PORT,
  mongoUsername: process.env.MONGODB_USERNAME,
  isProd: Boolean(process.env.NODE_ENV !== "development"),
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },
  corsOptions: {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  },
  appVersion: process.env.APP_VER,
  appCommit: process.env.APP_COMMIT,
  appDeployDate: process.env.APP_DEPLOY_DATE
};
