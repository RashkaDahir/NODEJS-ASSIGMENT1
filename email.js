var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rashkagoat1@gmail.com',
    pass: 'jwszrjmmgjzwaldn'
  }
});

var mailOptions = {
  from: 'rashkagoat1@gmail.com',
  to: 'rashkajr8899@gmail.com',
  subject: 'Sending Email using Node.j',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});