const mongooes = require("mongoose");

// const tree_schema = mongooes.Schema({key},{uniq key})
const tree_schema = mongooes.Schema(
    {
        // key
        tree_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        fruit: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const tree = mongooes.model("tree",tree_schema)
module.exports = tree 