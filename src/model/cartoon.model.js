const mongooes = require("mongoose");

// const cartoon_schema = mongooes.Schema({key},{uniq key})
const cartoon_schema = mongooes.Schema(
    {
        // key
        cartoon_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        channel: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);
const cartoon = mongooes.model("cartoon",cartoon_schema)
module.exports = cartoon