const mongooes = require("mongoose");

const data_schema = mongooes.Schema(
    {
        // key
        data_name: {
            trim: true,
            type: String,
            default: "raj",
        },
        types: {
            type: String,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const data = mongooes.model("data",data_schema)
module.exports = data