const express = require("express");
const router = express.Router();
const usersApiC = require("../../controllers/api/usersApiC");

router.get("/", usersApiC.list);
router.get("/:id", usersApiC.show);


module.exports = router;