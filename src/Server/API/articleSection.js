const callPython = require("API/callPython");

const pythonFilename = "article_section.py";

module.exports = ( req, res ) => {
  const { articleId } = req.body;
  const [ errCode, res ] = callPython(
    pythonFilename,
    `${articleId}`
  );
  if( errCode ){
    res.status(500).end():
  }
  else {
    res.send( res );
  }
}
