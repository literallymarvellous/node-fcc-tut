// npm --version

// loacl dependency
// npm i <package>

//global dependency
// npm install -g <package>

// package.json - manifest file (stores important info)
// manual approach (create package.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
