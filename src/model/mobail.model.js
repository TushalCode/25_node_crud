const mongooes = require("mongoose");

const mobail_schema = mongooes.Schema(
    {
        // key
        mobile_comp: {
            trim: true,
            type: String,
            default: "raj",
        },
        mobile_model: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);
const mobail = mongooes.model("mobail",mobail_schema)
module.exports = mobail