const mongoose = require("mongoose");
const user_schema = mongoose.Schema(
    {
        //keys
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
    },
    {
        // 1 unique || functinality key
        timestamps: true,
    }
);

const user = mongoose.model("user", user_schema);
module.exports = user;
