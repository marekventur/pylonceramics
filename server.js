const Instagram = require("instagram-web-api");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const axios = require("axios");
const csv = require("csvtojson");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(3333, function () {
  console.log("port:", server.address().port);
});

function cachePromise(worker) {
  let resultPromise = null;
  return () => {
    return Promise.resolve()
    .then(() => {
      if (!resultPromise) {
        setTimeout(() => resultPromise = null, 5 * 60 * 1000);
        resultPromise = worker()
          .catch(e => {
            console.log("Caught error", e.message);
            throw e;
          });
      }
      return resultPromise;
    });
  }
}

// instagram

const instagramCredentials = {
  username: process.env.IG_USERNAME, 
  password: process.env.IG_PASSWORD
};
const cachedInstagramFetch = cachePromise(() => {
  const client = new Instagram(instagramCredentials);
  return client.login()
    .then(() => client.getPhotosByUsername({username: "pylon_ceramics"}))  
});
app.get("/pcig", function(req, res) {
  cachedInstagramFetch()
  .then(
    d => res.status(200).send(d), 
    e => res.status(500).send(e.message)
  );
});

// Google docs
const url = "https://docs.google.com/spreadsheets/d/1rOtUZXy1pkbovGWtDd6RhdV02pZM1VpNLus1oUkd-4c/pub?output=csv";
const cachedGoogleDocsRequest = cachePromise(() => 
  axios.get(url)
    .then(response => {
      return csv({
          noheader:true,
          output: "csv"
      }).fromString(response.data)
      .then(d => 
        // this seems to be a bug in the parsing library
        d.map(r => r.map(c => c.replace(/"$/, "")))
      )
    }));
app.get("/pcgd", function(req, res) {
  cachedGoogleDocsRequest()
  .then(
    d => res.status(200).send(d), 
    e => res.status(500).send(e.message)
  );
});
