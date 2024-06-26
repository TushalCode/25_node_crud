const express = require("express");
const { result_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-result",
    result_Controller.create_Result
);

router.get(
    // call back <= controller
    "/list",
    result_Controller.get_Result
);
router.put(
    "/update-result/:result_id",
    // cb series
    result_Controller.update_Result
);
router.delete(
    "/delete/:id",
    // cb doc
    result_Controller.delete_Result
);
module.exports = router