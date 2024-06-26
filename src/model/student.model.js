const mongooes = require("mongoose");

// const student_schema = mongooes.Schema({key},{uniq key})
const student_schema = mongooes.Schema(
    {
        // key
        student_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        student_number: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const student = mongooes.model("student",student_schema)
module.exports = student