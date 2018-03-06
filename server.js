const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
  return res.json([
    {
      title: `Aliens`,
      director: `James Cameron`,
      year: 1989
    },
    {
      title: `Fight Club`,
      director: `David Fincher`,
      year: 1999
    },
    {
      title: `Moulin Rouge`,
      director: `Baz Luhrman`,
      year: 2000
    },
    {
      title: `Requiem for a Dream`,
      director: `Darrenn Arronofsky`,
      year: 2003
    }
  ])
})

app.get('/*', (req,res)=> {
  var options = {
    root: __dirname + '/public',
  };
  res.sendFile('index.html',options);
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
