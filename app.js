const express = require("express")
const cors = require("cors")
const multer = require("multer")
const bodyParser = require("body-parser")

// Import MongoDB connection
require("./config")

//Import routes
const signupRoute = require("./routes/signupRoute")
const loginRoute = require("./routes/loginRoute")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


//ALL ROUTES

app.get("/", (req, res) => {
    res.send("welcome to qsm ride")
})

//Login route
app.post("/login", loginRoute)

//Signup route (name, email)
app.post("/signup", signupRoute)

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
