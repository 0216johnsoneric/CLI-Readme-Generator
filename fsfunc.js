const fs = require("fs");

function Fsfunc() {}

Fsfunc.prototype.read = function(file) {
    return fs.readFileSync(file, "utf8");
};

Fsfunc.prototype.append = function(path, data) {
    return fs.appendFileSync(path, data);
};

module.exports = Fsfunc;
