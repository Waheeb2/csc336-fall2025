import express from "express";
import fs from "fs";

const app = express()

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", async(req, res) => {
    let result = await fs.readFileSync("./world.json");
    let world = await result.json();

    console.log(world.regions[0].name);
});

app.listen(3000);



