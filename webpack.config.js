/// <binding ProjectOpened='Run - Development' />

var isProd = true;

if (!isProd) {
    module.exports = require('./webpack.dev.js');
} else {
    module.exports = require('./webpack.prod.js');
}