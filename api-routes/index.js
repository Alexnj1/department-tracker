const express = require('express');
const router = express.Router();

router.use("./department")
router.use("./employee")
router.use("./roles")

module.exports = router