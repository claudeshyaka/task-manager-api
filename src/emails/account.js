const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "elieclaude23@gmail.com",
    subject: "Welcome to Task app!",
    text: `Welcome to the app, ${name}. Let me know how get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "elieclaude23@gmail.com",
    subject: "Sorry to see you go!",
    text: `Thank you for using the task app, ${name}. We hope to see you back soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
