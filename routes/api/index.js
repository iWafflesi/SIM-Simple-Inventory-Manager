const router = require("express").Router();
const materialRoutes = require("./materials");
const partRoutes = require("./parts");
const userRoutes = require("./users");
const jobRoutes = require("./jobs");

router.use("/materials", materialRoutes);
router.use("/jobs", jobRoutes);
router.use("/users", userRoutes);
router.use("/parts", partRoutes);


module.exports = router;
