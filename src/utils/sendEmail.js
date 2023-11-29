const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEMail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_APP_USER,
      pass: process.env.GOOGLE_APP_PASS,
    },
  });

  transporter.verify((err, success) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Server is ready to take our emails", success);
    }
  });
};
module.exports = sendEMail;
