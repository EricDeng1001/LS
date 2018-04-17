const callPython = require("API/callPython");

const pythonFilename = "offer_logic_zhongdian1.py";

module.exports = ( req, res ) => {
  const { username } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${username}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
