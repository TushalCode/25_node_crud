const express = require("express");
const { book_Controller } = require("../../controller");

const router = express.Router();
router.post(
    // call back <= controller
    "/create-book",
    book_Controller.create_Book
);

router.get(
    // call back <= controller
    "/list",
    book_Controller.get_Book
);
module.exports = router