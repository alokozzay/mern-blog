const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
    return res.json("its work posts!");
});

module.exports = router;
