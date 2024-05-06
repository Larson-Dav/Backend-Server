import express from "express"
import dotenv from "dotenv"
import tweetsRoute from "./routes/tweets.route.js"
import userRoute from "./routes/user.route.js"
import userSpecificRoute from "./routes/specific.route.js"

dotenv.config()

const { PORT } = process.env
const servium = express()

servium.use(express.json())
servium.use("/tweets", tweetsRoute)
servium.use("/tweets", userSpecificRoute)
servium.use('/tweets', userRoute)

servium.listen(PORT, () => console.log('Servium running'))
