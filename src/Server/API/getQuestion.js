const callPython = require("API/callPython");

const pythonFilename = "show_question.py";

module.exports = ( req, res ) => {
  const { lock , articleId , username } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${username} ${lock} ${articleId}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
