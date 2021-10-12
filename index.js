const client_secret = 'dasdfasdf9879876asdf8698a6sdf';
const express = require('express'); 
const xssFilters = require('xss-filters'); 
const util = require('util');  
const app = express();  
app.get('/', (req, res) => {   
  const unsafeFirstname = req.query.firstname;  
  const unsafeLastname = req.query.lastname;  
  res.send(util.format('<h1>Tom%s</h1>', unsafeFirstname + unsafeLastname)); 
});  

app.listen(3000);
