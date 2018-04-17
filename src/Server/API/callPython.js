var execSync = require('child_process').execSync;

module.exports = ( name , args = "" ) => {
    name = __dirname + `/python/${name}`;
    var stdout;
    try {
      stdout = execSync(`python ${name} ${args}` );
    } catch ( err ){
      return [ 1 , err ];
    }
    return [ 0 , stdout ];
}
