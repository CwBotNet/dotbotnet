const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');


// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Work: ${req.body.options}</li>
    <li>Name: ${req.body.name}</li>
    <li>Phone NO: ${req.body.phoneNumber}</li>
    <li>Email: ${req.body.email}</li>
    <h2>${req.body.message}</h2>
    </ul>
    `;
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'rhianna30@ethereal.email',
            pass: '985vCVgcXdPsgxyEEn'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Dotbotnet" <rhianna30@ethereal.email>', // sender address
        to: "rajsahaniofficial@gmail.com, elczszplosj@nightorb.com", // list of receivers
        subject: "Work contact request", // Subject line
        text: "Hello world?", // plain text body
        html: `<h3>${output}</h3>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.render('emailSent');
    // res.json(info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendMail;