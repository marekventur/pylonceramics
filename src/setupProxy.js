const express = require('express');
const path = require('path');

module.exports = function (app) {
    app.use('/instagram', express.static(path.join(__dirname, '../instagram')));
};