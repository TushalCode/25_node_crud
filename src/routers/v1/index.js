const express = require("express");
const userRouter = require("./user.routers");
const movieRouter = require("./movie.routers");
const adminRouter = require("./admin.routers")
const bookRouter = require("./book.rourters")
const classiRouter = require("./classi.routers")
const dataRouter = require("./data.routers")
const mobaileRouter = require("./mobaile.routers")
const resultRouter = require("./result.routers")
const subjectRouter = require("./subject.routers")
const computerRouter = require("./computer.routers")
const courceRouter = require("./cource.router")
const electricRouter = require("./electric.router")
const electronicRouter = require("./electronic.router")
const fieldRouter = require("./field.router")
const funicherRouter = require("./funicher.router")
const cartoonRouter = require("./cartoon.routers")
const cityRouter = require("./city.routers")
const countryRouter = require("./country.routers")
const hillRouter = require("./hill.routers")
const mallRouter = require("./mall.routers")
const plenetRouter = require("./plenet.routers")
const stateRouter = require("./state.routers")
const studentRouter = require("./student.routers")
const treeRouter = require("./tree.routers")
const riverRouter = require("./river.routers")

const router = express()


router.use("/linking-phrase", userRouter);
router.use("/movie",movieRouter );
router.use("/admin",adminRouter)
router.use("/book",bookRouter)
router.use("/classi",classiRouter)
router.use("/data",dataRouter)
router.use("/mobaile",mobaileRouter)
router.use("/result",resultRouter)
router.use("/subject",subjectRouter)
router.use("/computer",computerRouter)
router.use("/cource",courceRouter)
router.use("/electric",electricRouter)
router.use("/electronic",electronicRouter)
router.use("/field",fieldRouter)
router.use("/funicher",funicherRouter)
router.use("/cartoon",cartoonRouter)
router.use("/city",cityRouter)
router.use("/country",countryRouter)
router.use("/hill",hillRouter)
router.use("/mall",mallRouter)
router.use("/plenet",plenetRouter)
router.use("/state",stateRouter)
router.use("/river",riverRouter)
router.use("/student",studentRouter)
router.use("/tree",treeRouter)

module.exports = router;

