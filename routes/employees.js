const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth.js');
const { add, edit, remove, all, employee } = require("../controllers/employees");

router.get("/", auth, all);
router.get("/:id", auth, employee);
router.post("/add", auth, add);
router.delete("/remove/:id", auth, remove);
router.put("/edit/:id", auth, edit);

module.exports = router;