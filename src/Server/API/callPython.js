var exec = require('child_process').exec;

module.exports = ( name , args ) => {
    name = __dirname + "/name";
    exec(`python ${name} ${args}` , function( err , stdout , stderr ){
      if( err ){
        console.log( err );
      }
      if( stdout ){
        console.log( stdout );
      }
    });
}
