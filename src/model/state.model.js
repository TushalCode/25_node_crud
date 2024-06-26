const mongooes = require("mongoose");

// const state_schema = mongooes.Schema({key},{uniq key})
const state_schema = mongooes.Schema(
    {
        // key
        state_name: {
            trim: true,
            type: String,
            default: "tush",
        }
    },
    {
        timestamps: true,
    }
);
const state = mongooes.model("state",state_schema)
module.exports = state