const router = require("express").Router()

const { getListings } = require("../controllers/getAirBnbs")

router.get("/airbnb", getListings)

module.exports = router;