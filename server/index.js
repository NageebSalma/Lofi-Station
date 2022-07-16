const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');

let affirmation 


app.get("/api", (req, res) => {
    axios.get('https://www.affirmations.dev/')
.then(response => {
  affirmation = response.data.affirmation
  console.log(affirmation)
  res.json(response.data)  
})
.catch(error => {
  console.log(error);
});
     
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});