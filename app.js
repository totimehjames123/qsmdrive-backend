const express = require("express")
const cors = require("cors")
const multer = require("multer")
const bcrypt = require("bcrypt")

const app = express()

//Login route
app.post("/login", (req, res) => {
    res.send("Hello world")
})

//Signup route
app.post("/signup", (req, res) => {
    bcrypt.hash("psd", 10, (err, hash) => {
        if (err) console.error(err)
        else console.log("Great")
    })
    res.send("Hi signup");
})

//Running the app
app.listen(5000, () => {
    console.log("App is running...")
})
