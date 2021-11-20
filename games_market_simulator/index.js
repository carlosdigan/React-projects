const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const fetch = require("isomorphic-fetch");
const cors = require("cors");

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

app.get("/games", async (req, res) => {
  const website = "https://www.instant-gaming.com/en/search/?";
  const query_params = encodeQueryData(req.query)
  console.log(req.query);
  const url = website + query_params;
  console.log(url);
  let response = await fetch(url);
  let html = await response.text(); 
  console.log(response.status)
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    if (d == "cat")
      ret.push("cat%5B%5D" + '=' + encodeURIComponent(data[d]));
    else
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}