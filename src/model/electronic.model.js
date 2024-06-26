const mongooes = require("mongoose");

const electronic_schema = mongooes.Schema(
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
const electronic = mongooes.model("electronic",electronic_schema)
module.exports = electronic