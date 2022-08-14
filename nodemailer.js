const nodemailer = require('nodemailer');

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "userID",     //mailtrap.io userID
    pass: "password"    //mailtrap.io password
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) =>{
    if(error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: 'grs0416@gmail.com',
  to: 'grs0416@gmail.com',
  subject: '테스트 메일입니다',
  text: 'nodejs를 학습하고 있습니다'
}

send(email_data);