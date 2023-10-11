// standard-version-updater.js
const stringifyPackage = require('stringify-package')
const detectIndent = require('detect-indent')
const detectNewline = require('detect-newline')
console.log('custom-version-updater')
module.exports.readVersion = function (contents) {
    const matches = contents.match(/window\.SUP\.version = '(\d{1,}\.\d{1,}\.\d{1,})'/);
    console.log('***', contents);
    console.log('***', matches[1])
    return matches[1];
}

module.exports.writeVersion = function (contents, version) {
    console.log('???', contents);
    console.log('???', version);
    contents.replace(/window\.SUP\.version = '(\d{1,}\.\d{1,}\.\d{1,})'/, function (match, p1) {
        return match.replace(p1, version);
    })
    return contents;
}
