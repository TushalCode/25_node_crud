const express = require("express");
const { tree_Controller } = require("../../controller");

const router = express();
router.post(
    // call back <= controller
    "/create-tree",
    tree_Controller.create_Tree
);

router.get(
    // call back <= controller
    "/list",
    tree_Controller.get_Tree
);
router.put(
    "/update-tree/:tree_id",
    // cb series
    tree_Controller.update_Tree
);
router.delete(
    "/delete/:id",
    // cb doc
    tree_Controller.delete_Tree
);
module.exports = router