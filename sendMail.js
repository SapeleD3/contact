const { createTransport } = require('nodemailer');

const { MAIL_PASSWORD, MAIL_EMAIL } = process.env;

module.exports = sendMail = async (from, subject, body, attachments) => {
  const nodemailerOptions = {
    service: 'gmail', // hostname
    auth: {
      user: MAIL_EMAIL,
      pass: MAIL_PASSWORD,
    },
  };
  try {
    const transporter = createTransport(nodemailerOptions);
    const mailOptions = {
      from, // sender address (who sends)
      to: 'devclub57@gmail.com', // list of receivers (who receives)
      subject, // Subject lineaa
      text: body, // html body
      attachments,
    };
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
