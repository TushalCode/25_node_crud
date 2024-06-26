const mongooes = require("mongoose");

// const plenet_schema = mongooes.Schema({key},{uniq key})
const plenet_schema = mongooes.Schema(
    {
        // key
        plenet_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        plenet_colour: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);
const plenet = mongooes.model("plenet",plenet_schema)
module.exports = plenet