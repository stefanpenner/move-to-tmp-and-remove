var os = require('os');
var fs = require('fs-extra');

var TMPDIR = os.tmpdir()
var writableTmp = fs.accessSync(TMPDIR, fs.W_OK);
module.exports = function() {
  throw new Error('Only .sync version is implemeneted')
};

module.exports.sync = function tryBestRemoveSync(directory) {
  if (writableTmp) {
    moveAndRemoveSync(directory);
  } else {
    fs.removeSync(directory);
  }
}

function moveAndRemoveSync(directory) {
  fs.moveSync(directory, TMPDIR);
  fs.removeSync(TMPDIR + '/' + path.basename(directory))
}

