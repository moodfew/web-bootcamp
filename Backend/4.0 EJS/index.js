import express from "express";
const app = express();
const port = 3002;


app.get("/", (req, res) => {
    const d = new Date();
    var day = d.getDay();

    let weekType = "a weekday";
    let adv = "it's time to work hard"

    if (day === 0 || day === 6) {
        weekType = "the weekend";
        adv = "it's time to have fun"
    } 

    res.render("index.ejs", {
        dayType: weekType,
        advice: adv,
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});