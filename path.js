const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

// basename()

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, ".js");
console.log(base2);

// extension() name

const ext = path.extname(myFilePath);
console.log(ext);

// directory() name
const dir = path.dirname(myFilePath);
console.log(dir);

// join() name
const myPath = path.join("subfolder", "anotherfolder", "index.js");
console.log(myPath);

// resolve() name
const myPath2 = path.resolve("subfolder", "anotherfolder", "index.js");
console.log(myPath2);

// __dirname() name
console.log(__dirname);

// __filename() name
console.log(__filename);
