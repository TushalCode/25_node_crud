const express = require("express");
const { hill_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-hill",
    hill_Controller.create_Hill
);

router.get(
    // call back <= controller
    "/list",
    hill_Controller.get_Hill
);
router.put(
    "/update-hill/:hill_id",
    // cb series
    hill_Controller.update_Hill
);
router.delete(
    "/delete/:id",
    // cb doc
    hill_Controller.delete_Hill
);
module.exports = router