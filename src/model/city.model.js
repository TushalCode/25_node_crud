const mongooes = require("mongoose");

// const city_schema = mongooes.Schema({key},{uniq key})
const city_schema = mongooes.Schema(
    {
        // key
        city_name: {
            trim: true,
            type: String,
            default: "tush",
        }
    },
    {
        timestamps: true,
    }
);
const city = mongooes.model("city",city_schema)
module.exports = city