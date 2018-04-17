const fs = require("fs");
const apiObj = {};
const requireAPI = ( api ) => require("../API/" + api );

const [ "callPyhton.js" , "pyhton" , ...apiList ] = fs.readdirSync("../API/");

for( let api of apiList ){
  apiObj[`/${api}`] = { api };
}

module.exports = apiObj;
