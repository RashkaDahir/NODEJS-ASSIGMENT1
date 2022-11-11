
  
// Including fs module
const fs = require('fs');
  
// Constructing readable stream
const readable = fs.createReadStream("input.txt");
  
// Calling close method
readable.close();
  
// Handling close event
readable.on("close", () => {
    console.log("Stream ended");
});
  
console.log("Done...");