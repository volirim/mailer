import { Request, Response } from "express";
import { sendEmail } from "../nodeMailerService/utils";

export const sendEmailController = async (
  req: Request<any, any, { name: string; email: string; text: string }>,
  res: Response
) => {
  if (!req.body?.name || !req.body?.email || !req.body?.text) {
    res.send({ status: "not_ok" });
    return;
  }
  sendEmail(req.body.name, req.body.email, req.body.text);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ status: "ok" });
};
