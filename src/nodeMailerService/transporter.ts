import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.yandex.ru",
  port: 465,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS,
  },
});
