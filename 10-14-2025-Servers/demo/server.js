
import express from "express";

// Create an instance of the express server
const app = express();

app.use(express.static("./public"));

app.get("/api/randomNumber", (req, res) => {
    res.send(Math.random());
});


app.post("/api/add", (req, res) => {
    console.log(req.body.name);

    req.body.name += "!!!";

    res.json(req.body);

});

app.listen(3000);
