const bcrypt = require("bcrypt")
const usersCollection = require("../models/users")

const loginRoute = async (req, res) => {
try{
    
    const {email, password} = req.body;

    const isUserExists = await usersCollection.findOne({email: email})

    if (!isUserExists){
        res.status(404).json({message: "User not found!"})
    }
    else{
        const isValidPassword = await bcrypt.compare(password, isUserExists.password)

        if (isValidPassword){
            res.status(200).json({message: "Logged in successfully!"})
        }
        else{
            res.status(200).json({message: "Invalid password!"})
        }
    }

        
}
catch (error){
    res.send({message: "Error: " + error.message})}

}

module.exports = loginRoute