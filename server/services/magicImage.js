const gm = require('gm').subClass({imageMagick: true});

module.exports = {
    compositeImage: function (name) {
        return new Promise(function (resolve, reject) {
            gm(`tmp/${name}`)
                .composite('./temp/logo.png')
                .in("-gravity", "center")
                .write('tmp/result.png', function (err) {
                    if (err) {
                        reject();
                    }
                    resolve();
                });
        });
    },
    // Resize and set white background
    resizeImage: function (name) {
        return new Promise(function (resolve, reject) {
            gm(`./tmp/${name}`)
                .resize(150, 150)
                .flatten()
                .write('./temp/1.png', function (err) {
                    if (err) {
                        reject();
                    }
                    resolve();
                });
        });
    }
};
