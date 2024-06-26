const express = require("express");
const { electric_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-electric",
    electric_Controller.create_Electric
);

router.get(
    // call back <= controller
    "/list",
    electric_Controller.get_Electric
);
router.put(
    "/update-electric/:electric_id",
    // cb series
    electric_Controller.update_Electric
);
router.delete(
    "/delete/:id",
    // cb doc
    electric_Controller.delete_Electric
);
module.exports = router