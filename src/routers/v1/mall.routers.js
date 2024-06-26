const express = require("express");
const { mall_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-mall",
    mall_Controller.create_Mall
);

router.get(
    // call back <= controller
    "/list",
    mall_Controller.get_Mall
);
router.put(
    "/update-mall/:mall_id",
    // cb series
    mall_Controller.update_Mall
);
router.delete(
    "/delete/:id",
    // cb doc
    mall_Controller.delete_Mall
);
module.exports = router