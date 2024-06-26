const mongooes = require("mongoose");

const classi_schema = mongooes.Schema(
    {
        // key
        classi_name: {
            trim: true,
            type: String,
            default: "raj",
        },
        classi_no: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const classi = mongooes.model("classi",classi_schema)
module.exports = classi