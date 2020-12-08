const { Router } = require('express');

const searchRouter = require('./search');
const productRouter = require('./products');
const router = Router();

router.use("/search", searchRouter);
router.use('/products', productRouter);

module.exports = router;