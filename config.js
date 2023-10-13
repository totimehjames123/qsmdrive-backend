const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://totimehjames123:qLrMlJ2XItaKW2H6@ac-ebm03rm-shard-00-00.oqs8c5j.mongodb.net:27017,ac-ebm03rm-shard-00-01.oqs8c5j.mongodb.net:27017,ac-ebm03rm-shard-00-02.oqs8c5j.mongodb.net:27017/qsmdrive?ssl=true&replicaSet=atlas-qlfpwp-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(
    console.log("Connected to MongoDB Successfully!")
).catch((error) => {
    console.error("Failed to connect!", error.message)
})


// qLrMlJ2XItaKW2H6