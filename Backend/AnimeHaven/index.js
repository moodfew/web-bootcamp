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
        res.status(404).send(error.message)
    }
    res.render("index.ejs");
});

app.get("/random", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random/anime");
        console.log(result);
        res.render("random.ejs", {
            content: JSON.stringify(result.data),
            image: result.data.data.images.jpg.image_url,
            title: result.data.data.title,
            type: result.data.data.type,
            synopsis: result.data.data.synopsis,
            status: result.data.data.status,
            episodes: result.data.data.episodes,
            score: result.data.data.score
        });
    }
    catch (error) {
        res.status(404).send(error.message)
    }
});



app.get("/top", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/top/anime");
        const data = result.data;

        let randomIndex = Math.floor(Math.random * 10);

        res.render("top.ejs", {
            content: data
        });
    } catch (error) {
        res.status(404).send(error.message)
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});