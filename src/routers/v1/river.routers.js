const express = require("express");
const { river_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-river",
    river_Controller.create_River
);

router.get(
    // call back <= controller
    "/list",
    river_Controller.get_River
);
router.put(
    "/update-river/:river_id",
    // cb series
    river_Controller.update_River
);
router.delete(
    "/delete/:id",
    // cb doc
    river_Controller.delete_River
);
module.exports = router