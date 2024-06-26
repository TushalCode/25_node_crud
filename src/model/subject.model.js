const mongooes = require("mongoose");

const subject_schema = mongooes.Schema(
    {
        // key
        subject_name: {
            trim: true,
            type: String,
            default: "raj",
        },
        std: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const subject = mongooes.model("subject",subject_schema)
module.exports = subject