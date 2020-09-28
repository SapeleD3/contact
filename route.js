const express = require('express');
const sendMail = require('./sendMail');
const router = express.Router();
var multer = require('multer');
var upload = multer();

router.post('/', upload.none(), async function (req, res) {
  try {
    const { message, name, email } = req.body;
    //devclub57@gmail.com
    const from = email;
    const subject = `Messgage from - ${name}`;
    const body = message;
    const resp = await sendMail(from, subject, body);
    if (!resp) {
      return res.status(404).json({ data: 'something went wrong' });
    }

    return res.status(200).json({ data: 'message recieved' });
  } catch (err) {
    return res.status(500).json({ error: 'internal server error' });
  }
});

module.exports = router;
