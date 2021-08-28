const request = require('request');
const fs = require('fs');
const rl = require('readline');

request(process.argv[2], (error, response, body) => {
  if (error) throw error;
  fs.writeFile(process.argv[3], body, function (error){
    if (error) throw error;
    console.log(`Downloaded and saved ${response.rawHeaders[21]} bytes to ${process.argv[3]}`);
  });
});