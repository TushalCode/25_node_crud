const mongoose = require("mongoose")

const book_schema = mongoose.Schema(
    {
        book_name: {
            trim: true,
            type: String,
            default: "omg",
        },
        book_aother: {
            type: String,
            default: "god",

        }
    },
    {
        timestamps: true,
    }
)

const book = mongoose.model("book",book_schema)
module.exports = book