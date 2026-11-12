import dotenv from "dotenv"
import connectDB from "./config/database.js"
// is a dependency which helps us to extract enviroment variables
import app from "./app.js"

dotenv.config({
    path : `./.env`
})

const startServer = async  () => {
    try {
        await connectDB()

        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error


        }) 
        //when it restarts it should start form this port which is in the env folder
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port: ${process.env.PORT}`)


        })
    } catch (error) {
        console.log("MonogoDB connection failed", err)
    }
}

startServer()