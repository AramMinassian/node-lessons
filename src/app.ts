import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cron from "node-cron";

dotenv.config();

const EMAIL = process.env.EMAIL || "aaa@aaa.com";
const PASSWORD = process.env.PASSWORD || "111111";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
})

const messageOptions = {
  from: EMAIL,
  to: "aramminas@outlook.com",
  subject: "Node practice",
  text: "Hello there"
}

cron.schedule("*/5 * * * *", () => {
  transporter.sendMail(messageOptions, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Message has successfully been sent");
    }
  })
})




