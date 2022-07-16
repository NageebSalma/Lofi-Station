const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const path = require("path");
app.use(express.static(path.join(__dirname, 'lofi-station')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'lofi-station', 'public/index.html'));
});
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