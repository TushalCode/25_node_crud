const express = require("express");
const { electronic_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-electronic",
    electronic_Controller.create_Electronic
);

router.get(
    // call back <= controller
    "/list",
    electronic_Controller.get_Electronic
);
router.put(
    "/update-electronic/:electronic_id",
    // cb series
    electronic_Controller.update_Electronic
);
router.delete(
    "/delete/:id",
    // cb doc
    electronic_Controller.delete_Electronic
);
module.exports = router