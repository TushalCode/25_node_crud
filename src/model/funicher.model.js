const mongooes = require("mongoose");

const funicher_schema = mongooes.Schema(
    {
        // key
        product_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        brand_name: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const funicher = mongooes.model("funicher",funicher_schema)
module.exports = funicher