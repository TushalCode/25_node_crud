const mongooes = require("mongoose");

const computer_schema = mongooes.Schema(
    {
        // key
        computer: {
            trim: true,
            type: String,
            default: "raj",
        },
        company: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);
const computer = mongooes.model("computer",computer_schema)
module.exports = computer