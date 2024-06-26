const mongooes = require("mongoose");

// const mall_schema = mongooes.Schema({key},{uniq key})
const mall_schema = mongooes.Schema(
    {
        // key
        mall_name: {
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
const mall = mongooes.model("mall",mall_schema)
module.exports = mall