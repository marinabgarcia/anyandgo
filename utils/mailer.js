// Require nodemailer smtp 
var config = require('../config');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// http://stackoverflow.com/a/20996285/467034
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Database Connection
var transport = exports.transport = nodemailer.createTransport(smtpTransport({
    secureConnection: false,
    requiresAuth: true,
    host: config.mail.host,
    port: config.mail.port,
    tls: { ciphers:'SSLv3', rejectUnauthorized: false },
    auth: {
        user: config.mail.auth.user,
        pass: config.mail.auth.pass
    }
}));

var mailer = exports.mailer = function(obj, cb){
    // send mail
    transport.sendMail(obj, cb);
};

// test
/*
mailer({
        from: config.mail.auth.user, 
        to: 'sample@anyandgo.com',
        subject: 'Anyandgo',
        text: 'Sent from anyandgo'
    }, function(error, response){
       if(error){
           console.log(error);
       }else{
           console.log("Message sent: ", response);
       }
});
*/