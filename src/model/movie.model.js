const mongoose = require("mongoose")
const movie_schema = mongoose.Schema(
    {
        //keys
        movie_name: {
            type: String,
            trim: true,
        },
        rating: {
            type: Number,
            default:0,
        },
    },
    {
        // 1 unique || functinality key
        timestamps: true,
    }
);

const movie = mongoose.model("Movie", movie_schema);
module.exports = movie ;
