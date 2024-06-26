const express = require("express");
const { country_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-country",
    country_Controller.create_Country
);

router.get(
    // call back <= controller
    "/list",
    country_Controller.get_Country
);
router.put(
    "/update-country/:country_id",
    // cb series
    country_Controller.update_Country
);
router.delete(
    "/delete/:id",
    // cb doc
    country_Controller.delete_Country
);
module.exports = router