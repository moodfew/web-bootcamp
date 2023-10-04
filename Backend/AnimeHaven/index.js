import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const API_URL = "https://api.jikan.moe/v4";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random/anime");
        const data = result.data;
        console.log(data);
    } catch (error) {
        console.log("f")
    }
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});