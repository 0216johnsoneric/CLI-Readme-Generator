const fs = require("fs");

function Newfunc() {}

Newfunc.prototype.read = function(file) {
    return fs.readFileSync(file, "utf8");
};

Newfunc.prototype.append = function(path, data) {
    return fs.appendFileSync(path, data);
};

module.exports = Newfunc;
