const express = require("express");
const router = express.Router();
const prodC = require("../../controllers/api/productsApiC");

router.get("/", prodC.list);
router.get("/:id", prodC.show);
router.get("/search", prodC.search);

module.exports = router;
