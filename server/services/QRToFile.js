const QRCode = require('qrcode');

module.exports = {
    createQR: function (name, data) {
        return new Promise(function(resolve, reject){
            QRCode.toFile(`tmp/${name}`, JSON.stringify(data), {
                scale: 10,
                color: {
                    dark: '#00F',
                    light: '#FFFFFF'
                }
            }, function (err) {
                if (err) {
                    reject();
                }
                resolve();
            });
        });
    }
};
