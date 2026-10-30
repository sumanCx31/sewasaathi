const authRouter = require("../modules/auth/auth.router");
const HamroSewaRouter = require("./../hamrosewa/route");

const router = require("express").Router()
router.get("/",(req, res, next) => {
    res.json({
        data: null,
         message: "Health ok",
        status: "Sucess",
        options: null
    })
})

router.use("/auth",authRouter);
router.use("/hamrosewa", HamroSewaRouter);

module.exports = router;