const callPython = require("API/callPython");

const pythonFilename = "offer_lunzheng_zhenti_content.py";

module.exports = ( req, res ) => {
  const { requestQuestion } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${requestQuestion}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
