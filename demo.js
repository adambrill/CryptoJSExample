#!/usr/bin/env node

var CryptoJS = require("crypto-js");

var key = CryptoJS.enc.Utf8.parse('0123456789012345');
var ive  = CryptoJS.enc.Utf8.parse('0123456789012345');

var encrypted = CryptoJS.AES.encrypt("Something 12345", key, {iv: ive});
console.log('encrypted msg = ' + encrypted)