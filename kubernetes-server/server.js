const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const airbnbRouter = require("./routes/airbnbRouter")
const app = express()
app.use(cors())
app.use(express.json());
console.log("MONGO URI :", process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MONGO DB CONNECTED")).catch((err) => console.log("Failed to connect mongoDB"))

// app.use("/", (req, res) => res.status(200).json({ error: false, message: "Kubernetes server running..." }))
app.use("/api", airbnbRouter)
app.listen(9000, () => console.log("Server running..."))

