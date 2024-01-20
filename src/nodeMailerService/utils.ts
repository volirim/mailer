import { transporter } from "./transporter";

const generateHtmlMarkup = (name: string, email: string, text: string) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Message</title>
    </head>
    <body>
      <h1>Message from ${name}</h1>
      <h2>Email of ${name} is: ${email}</h2>
      <p>Text of the message: ${text}</p>
    </body>
    </html> `;
};

const generateMailOptions = (html: string) => {
  return {
    from: process.env.USER_EMAIL, // Sender
    to: process.env.USER_EMAIL, // Recipient
    html,
  };
};

export const sendEmail = (name: string, email: string, text: string) => {
  transporter.sendMail(
    generateMailOptions(generateHtmlMarkup(name, email, text)),
    (error, info) => {
      if (error) {
        console.error("Email sending failed:", error);
        return false;
      } else {
        console.log("Email sent: " + info.response);
        return true;
      }
    }
  );
};
