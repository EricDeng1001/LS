const callPython = require("./callPython");

const pythonFilename = "query_sentence.py";

module.exports = ( req, res ) => {
  const { username , lock , ariticleId  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${username} ${lock} ${ariticleId}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
