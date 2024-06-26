const mongooes = require("mongoose");

// const country_schema = mongooes.Schema({key},{uniq key})
const country_schema = mongooes.Schema(
    {
        // key
        country_name: {
            trim: true,
            type: String,
            default: "tush",
        }
    },
    {
        timestamps: true,
    }
);
const country = mongooes.model("country",country_schema)
module.exports = country