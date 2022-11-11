const fs = require('fs');
  
fs.watchFile(
  

  "input.txt",
  
  
  {
   
    bigint: false,
  
  
    persistent: true,
  
   
    interval: 400,
  },
  (curr, prev) => {
    console.log("\nThe file was edited");
  
  
    console.log("Previous Modified Time", prev.mtime);
    console.log("Current Modified Time", curr.mtime);
  
    console.log(
      "The contents of the current file are:",
      fs.readFileSync("input.txt", "utf8")
    );
  }
);