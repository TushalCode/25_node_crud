const express = require("express");
const router = express.Router();

router.get("/end-point", (req, res) => {
    res.status(200).json({
        success: true,
        message: "okkay done dona done",
    });
});

module.exports = router;
