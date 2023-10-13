const express = require("express")
const cors = require("cors")
const multer = require("multer")
const bcrypt = require("bcrypt")

// Import MongoDB connection
require("./config")

// Import all modules
const usersCollection = require("./models/users")

const app = express()
//Home route
app.get("/", (req, res) => {
    res.send("welcome to qsm ride")
})

//Login route
app.post("/login", async (req, res) => {
    res.send("Hello world")
})

//Signup route (name, email)
app.post("/signup", async (req, res) => {
    const {username, email} = req.body;

    res.send(username, email);
})

//Update password
app.post("/setPassword", (req, res) => {
    bcrypt.hash("psd", 10, (err, hash) => {
        if (err) console.error(err)
        else console.log("Great: " + hash)
    })
})

//Send mail - verification
app.post("/emailVerification", (req, res) => {
    res.send("email verification")
})

//

//Running the app
app.listen(5000, () => {
    console.log("App is running...")
})
