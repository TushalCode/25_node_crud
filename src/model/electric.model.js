const mongooes = require("mongoose");

const electric_schema = mongooes.Schema(
    {
        // key
        material: {
            trim: true,
            type: String,
            default: "tush",
        },
        quantity: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const electric = mongooes.model("electric",electric_schema)
module.exports = electric