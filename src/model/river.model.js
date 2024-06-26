const mongooes = require("mongoose");

// const river_schema = mongooes.Schema({key},{uniq key})
const river_schema = mongooes.Schema(
    {
        // key
        river_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        city: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);
const river = mongooes.model("river",river_schema)
module.exports = river