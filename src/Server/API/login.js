const callPython = require("API/callPython");

const pythonFilename = "login.py";

module.exports = ( req, res ) => {
  const { password , username } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${username} ${password}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
