#! /usr/bin/env node
const fs = require('fs')
var colors = require('colors/safe');
colors.enable();

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(colors.rainbow(data))
        return data
    }
})

// "bin": {
//   "resume-me": "./index.js"
// },