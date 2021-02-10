const path = require('path');

//Base file name
console.log(__filename);

//Dirctory name
console.log(path.dirname(__filename));

// File extention
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));


