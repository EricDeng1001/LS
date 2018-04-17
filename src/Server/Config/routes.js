const fs = require("fs");
const apiObj = {};
const requireAPI = ( api ) => require("../API/" + api );

const [ "callPyhton.js" , "pyhton" , ...apiList ] = fs.readdirSync("../API/");

for( let api of apiList ){
  api = api.slice( 0 ,  api.length - 3 );
  apiObj[`/${api}`] = { api };
}

module.exports = apiObj;
