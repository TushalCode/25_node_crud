const mongooes = require("mongoose");

const result_schema = mongooes.Schema(
    {
        // key
        student_name: {
            trim: true,
            type: String,
            default: "raj",
        },
        result: {
            type: String,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const result = mongooes.model("result",result_schema)
module.exports = result