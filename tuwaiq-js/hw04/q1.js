

"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name= prompt('Enter Your Name : ');
var figlet = require('figlet');

figlet(name, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});