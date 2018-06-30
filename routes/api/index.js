const router = require("express").Router();
const materialRoutes = require("./materials");
const partRoutes = require("./parts");
const userRoutes = require("./users");

router.use("/materials", materialRoutes);
router.use("/parts", partRoutes);
router.use("/users", userRoutes);


module.exports = router;
