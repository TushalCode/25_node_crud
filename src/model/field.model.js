const mongooes = require("mongoose");

const field_schema = mongooes.Schema(
    {
        // key
        project_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        brand_name: {
            type: String,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const field = mongooes.model("field",field_schema)
module.exports = field