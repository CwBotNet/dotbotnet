require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')
const nodemailer = require('nodemailer');
const sendMail = require('./controller/sendMail')

// Connection port

const $PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public')); // to load css file
app.set('view engine', 'ejs'); // to load ejs file
app.use(bodyParser.urlencoded({ extended: true })); // to take post request from client site


app.get('/', (req, res) => {
    res.render('home');
});

// loading about page
app.get('/about', (req, res) => {
    res.render('about');
});

// loading service page 
app.get('/service', (req, res) => {
    res.render('service');
});

app.get('/contact', (req, res) => {
    res.redirect('/#contact');
});

app.get('/ourvision', (req, res)=>{
    res.redirect('/#ourvision');
})


//

app.post('/', sendMail);

// smtp post
// app.post('/', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneNumber = req.body.phoneNumber;
//     const options = req.body.options;
//     const message = req.body.message;

//     const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//     <li>Work: ${options}</li>
//     <li>Name: ${name}</li>
//     <li>Phone NO: ${phoneNumber}</li>
//     <li>Email: ${email}</li>
//     </ul>
//     `;
//     console.log(name, email, phoneNumber, options, message);

//     let transporter = nodemailer.createTransport({
//         host: "smtp.elasticemail.com",
//         port: 2525,
//         auth: {
//             user: 'rajsahaniofficial019@gmail.com', // generated ethereal user
//             pass: 'C7B8B5824B595920A7DF519D2654A63BE2C8', // generated ethereal password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });

//     // send mail with defined transport object
//     let info = transporter.sendMail({
//         from: '"Dotbotnet" <rajsahaniofficial019@gmail.com>', // sender address
//         to: "rajsahaniofficial019@gmail.com, elczszplosj@nightorb.com", // list of receivers
//         subject: 'work contact request', // Subject line
//         text: 'message', // plain text body
//         html: output, // html body
//     });
//     console.log('message sent : %s', info.messageId);
//     res.json(info);

// })

const start = async () => {
    try {
        app.listen($PORT, () => {
            console.log(`app.js is connected to ${$PORT}`);
        });
    } catch (error) { }
}
start();