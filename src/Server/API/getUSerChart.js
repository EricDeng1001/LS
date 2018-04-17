const callPython = require("API/callPython");

const pythonFilename = "show_chart.py";

module.exports = ( req, res ) => {
  const { username , aid  } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${username} ${aid}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
