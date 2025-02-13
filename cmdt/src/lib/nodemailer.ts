import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.COMPANY_EMAIL,
    pass: process.env.COMPANY_PASSWORD,
  },
});

export { transport };
