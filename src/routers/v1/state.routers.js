const express = require("express");
const { state_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-state",
    state_Controller.create_State
);

router.get(
    // call back <= controller
    "/list",
    state_Controller.get_State
);
router.put(
    "/update-state/:state_id",
    // cb series
    state_Controller.update_State
);
router.delete(
    "/delete/:id",
    // cb doc
    state_Controller.delete_State
);
module.exports = router