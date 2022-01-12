const mongoose = require('mongoose')
const mongoPath = "mongodb://localhost:27017/red-lamp"

module.exports = async () => {
    await mongoose.connect(mongoPath)
    return mongoose
}