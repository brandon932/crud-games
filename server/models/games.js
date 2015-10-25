var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Game= new Schema({
    name: String,
    rating: Number,
    owned: Boolean
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model("games", Game);
