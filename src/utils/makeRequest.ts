import { configs } from "@/configs";
import { v4 } from "uuid";
import { sign } from "jsonwebtoken";

export default function (data?) {
  const payload = data
    ? {
        access_key: configs.accessKey,
        nonce: v4(),
        data: data
      }
    : {
        access_key: configs.accessKey,
        nonce: v4()
      };

  const token = sign(payload, configs.secretKey);

  return token;
}
