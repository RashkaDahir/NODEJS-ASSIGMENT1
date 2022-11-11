const fs = require("fs");
const { Transform } = require("stream");
const fileStream= fs.createReadStream("./input.txt");
const transformedData= fs.createWriteStream("./transformedData.txt");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

fileStream.pipe(uppercase).pipe(transformedData);