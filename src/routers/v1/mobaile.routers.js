const express = require("express");
const { mobaile_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-mobail",
    mobaile_Controller.create_Mobaile
);

router.get(
    // call back <= controller
    "/list",
    mobaile_Controller.get_Mobaile
);
router.put(
    "/update-mobail/:mobail_id",
    // cb series
    mobaile_Controller.update_Mobaile
);
router.delete(
    "/delete/:id",
    // cb doc
    mobaile_Controller.delete_Mobaile
);
module.exports = router