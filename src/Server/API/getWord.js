const callPython = require("./callPython");

const pythonFilename = "query_words.py";

module.exports = ( req, res ) => {
  const { query_words  } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${query_words}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
