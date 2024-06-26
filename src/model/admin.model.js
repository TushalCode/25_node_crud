const mongooes = require("mongoose");

// const admin_schema = mongooes.Schema({key},{uniq key})
const admin_schema = mongooes.Schema(
    {
        // key
        admin_name: {
            trim: true,
            type: String,
            default: "tush",
        },
        admin_contact: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
const admin = mongooes.model("admin",admin_schema)
module.exports = admin