const express = require("express")
const app = express()

// register view engines
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const blogs = [
        { title: "He finds eggs", snippet: "he finds eggs at the top of the screen" },
        { title: "He finds stuff", snippet: "he finds eggs at the top of the screen" },
        { title: "He knows nothing", snippet: "he finds eggs at the top of the screen" },
        { title: "She gets that", snippet: "he finds eggs at the top of the screen" },
    ]
    res.render("index", {title: "Home", blogs})
})

app.get("/about", (req, res) => {
    res.render("about", {title: "About"})
})

app.get("/blogs/create", (req, res) => {
    res.render("create", {title: "Create New Blog"})
})

app.use((req, res) => {
    res.status(404).render("404", {title: "404, Not Found"})
})


app.listen(3000)