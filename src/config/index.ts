import dotenv from "dotenv";
dotenv.config();

export const config = {
  mailUser: process.env.MAIL_USER || "",
  mailPass: process.env.MAIL_PASS || "",
};
