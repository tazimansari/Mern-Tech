//  Read the local directory and list all file names in it using JS 

const fs = require('fs');
const path = require('path');

const directoryPath = './'; 

fs.readdir(directoryPath, function(err, files) {
  if (err) {
    console.error('Error reading directory: ', err);
    return;
  }

  // list all files in the directory
  files.forEach(function(file) {
    console.log(file);
  });
});
