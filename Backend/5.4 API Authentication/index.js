import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const URL = "https://secrets-api.appbrewery.com";

const yourUsername = "seaxplays";
const yourPassword = "goshawty";
const yourAPIKey = "e9dd6a1b-f1ca-4819-be7b-0644113f5bb7";
const yourBearerToken = "0b34ba2d-c894-4aa9-8d86-e966207e6413";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});


app.get("/noAuth", async (req, res) => {
  
  try {
    const result = await axios.get(URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch (error) {
    res.status(404).send(error.message)
  }
});

app.get("/basicAuth", async (req, res) => {

  try {
    const result = await axios.get(URL + "/all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.get("/apiKey", async (req, res) => {
  
  try {
    const result = await axios.get(URL + "/filter", {
      params: {
        score: 8,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const config = {
  headers: {Authorization: `Bearer ${yourBearerToken}`}
}

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(URL + "/secrets/42", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
