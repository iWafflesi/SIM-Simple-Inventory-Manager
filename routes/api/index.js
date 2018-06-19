const router = require("express").Router();


// const bookRoutes = require("./books");
// // Book routes
// router.use("/books", bookRoutes);

const receivingRoutes = require("./receiving");
// Receiving routes
router.use("/receiving", receivingRoutes);

const productionRoutes = require("./production");
// Production routes
router.use("/production", productionRoutes);


module.exports = router;
