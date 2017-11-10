const express = require('express');
const fs = require("fs");
const qr = require('./services/QRToFile');
const magicImage = require('./services/magicImage');

const app = module.exports = express();

app.use(express.static('tmp'));
app.use(express.static('temp'));

app.use('/qr/:text', function (req, res) {
    const data = {
        firstName: 'Igor',
        lastName: 'Kompaniets',
        email: 'ikomp@gmail.com',
        gender: 'm',
        site: 'http://burger.com'
    };

    qr.createQR('qr.png', data)
        .then(() => magicImage.compositeImage('qr.png'))
        .then(() => {
            const img = fs.readFileSync('tmp/result.png');
            res.writeHead(200, {'Content-Type': 'image/png' });
            res.end(img, 'binary');
        })
        .catch((err) => console.log(err));
});