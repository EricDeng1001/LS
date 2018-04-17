const callPython = require("API/callPython");

const pythonFilename = "logic_test_new1.py";

module.exports = ( req, res ) => {
  const [ errCode, res ] = callPython( pythonFilename );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
