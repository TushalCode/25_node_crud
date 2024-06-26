const mongooes = require("mongoose");

// const hill_schema = mongooes.Schema({key},{uniq key})
const hill_schema = mongooes.Schema(
    {
        // key
        hill_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        address: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);
const hill = mongooes.model("hill",hill_schema)
module.exports = hill