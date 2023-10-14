const bcrypt = require("bcrypt")
const usersCollection = require("../models/users")

const loginRoute = async (req, res) => {
try{
    
    const {email, password} = req.body;

    const isUserExists = await usersCollection.findOne({email: email})

    if (!isUserExists){
        res.send({message: "User not found!", status: 404})
    }
    else{
        const isValidPassword = await bcrypt.compare(password, isUserExists.password)

        if (isValidPassword){
            res.send({message: "Logged in successfully!", status: 200})
        }
        else{
            res.send({message: "Invalid password!", status: 400})
        }
    }

        
}
catch (error){
    res.send({message: "Error: " + error.message})}

}

module.exports = loginRoute