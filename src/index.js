import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error)
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is ruuning at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGODB connection error: ", error)
})