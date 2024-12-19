const mongoose = require('mongoose');

const conn = async () => {
    try {
    //connect to database
    mongoose.connect(process.env.MONGO_URI)
    mongoose.connection.once("open", () => {
    console.log("connected to mongodb");
});
} catch (error) {
    console.log(`something went wrong connecting to mongodb: ${error.message}`);
}
};
module.exports = conn;