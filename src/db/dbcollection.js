const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://gts8521191tushal:jGh2nBrysdiUdkgG@apple.idnusoa.mongodb.net/ ")
        // .connect("mongodb+srv://gts8521191tushal:<password>@apple.idnusoa.mongodb.net/ ") a link na chale 
        .then((res) => {
            // console.log(res);
            console.log("data base conected");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
