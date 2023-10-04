import express from "express"
import bodyParser from "body-parser"
import jQuery from "jquery";

const app = express();
const port = 3001;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let day = days[d.getDay()];



app.get("/", (req, res) => {

    res.render("index.ejs", {
        month: month,
        date: date,
        day: day,
    });
});

var list1 = 1;

app.post("/", (req, res) => {

    res.render("index.ejs", {
        month: month,
        date: date,
        day: day,
        list: list1,
    });
    list1 += 1;
})

app.get("/work", (req, res) => {
    res.render("work.ejs");
});

var list2 = 1;

app.post("/work", (req, res) => {
    res.render("work.ejs", {
        list: list2,
    })

    list2 += 1;
})

app.post("/add", (req, res) => {
    res.render("partials/item.ejs")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});