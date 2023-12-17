const express = require("express");
const showdown = require('showdown');
const converter = new showdown.Converter();

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET = "APS3425";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        isAuth: false,
        data: ""
    });
});

app.post("/", (req, res) => {
    let secretkey = req.body.secretkey;

    let data = `# Hello, Markdown! \n\n This is a **simple** example.`;

    if(secretkey == SECRET) {
        res.render("index", {
            isAuth: true,
            data: converter.makeHtml(data)
        });
    } else {
        res.redirect("/");
    }
    
});

app.listen(PORT, () => {
    console.log(`[LOG] Listening on Port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
