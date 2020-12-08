const { Router } = require('express');

const searchRouter = require('./items');
const router = Router();

router.use("/items", searchRouter);

module.exports = router;