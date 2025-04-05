const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(reg,res)=>{
  res.send('backened is running ');
});

app.listen(PORT,() =>{
  console.log("Server is running on http://localhost:${PORT}");
});
              
