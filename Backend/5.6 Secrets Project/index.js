import express from "express"
import axios from "axios"

const app = express();
const port = 3001;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static('public'));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        const data = result.data;
        res.render("index.ejs", {
            secret: data.secret,
            user: data.username,
        });
    } catch (error) {
        console.log(error.response.data);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

