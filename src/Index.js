const express = require("express");
const connectDB = require("./db/dbcollection");
const router = require("./routers/v1");

const app = express();
const PORT = 1100; //niche 8080 lkya tya dirct port lkhi sakay const lkhya pachi
app.listen(PORT, () => {
    // setInterval(() => {
    //     let a =+ 10;
    //     console.log("tushal gangani");
    //     console.log(a++);
    // }, 1000);

    console.log("Server is running on port" + PORT);
})
app.use(express.json());
app.use("/v1", router);

connectDB();

