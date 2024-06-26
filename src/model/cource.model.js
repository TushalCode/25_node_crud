const mongooes = require("mongoose");

const cource_schema = mongooes.Schema(
    {
        // key
        cource_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        duration: {
            type: String,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const cource = mongooes.model("cource",cource_schema)
module.exports = cource