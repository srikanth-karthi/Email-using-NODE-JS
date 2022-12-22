var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20tuec216@skct.edu.in',
    pass: '*************'
  }
});

var mailOptions = {
  from: '20tuec216@skct.edu.in',
  to: '20tuec216@skct.edu.in,srikanthkarthi2003@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 