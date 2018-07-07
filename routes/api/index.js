const router = require("express").Router();
const materialRoutes = require("./materials");
const partRoutes = require("./parts");
const userRoutes = require("./users");
const jobRoutes = require("./jobs");
const adminRoutes = require('./admins');
const authRoutes = require('./auth');

router.use("/materials", materialRoutes);
router.use("/jobs", jobRoutes);
router.use("/users", userRoutes);
router.use("/parts", partRoutes);
router.use('/admins', adminRoutes);
router.use('.auth', authRoutes);

module.exports = router;
