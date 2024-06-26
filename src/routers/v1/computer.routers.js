const express = require("express");
const { computer_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-computer",
    computer_Controller.create_Computer
);

router.get(
    // call back <= controller
    "/list",
    computer_Controller.get_Computer
);
router.put(
    "/update-computer/:computer_id",
    // cb series
    computer_Controller.update_Computer
);
router.delete(
    "/delete/:id",
    // cb doc
    computer_Controller.delete_Computer
);
module.exports = router