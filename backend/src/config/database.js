import mongoose from "mongoose"

const connectDB = async () => {
    //you want a task to be finished then the next task begins
            //reason for try and catch if the app crashes you can catch or know your error

    try {
        const connectionInstance = await mongoose.connect
        (process.env.MONGODB_URI) // we are going to use the env file with the mongodb uri
        console.log(`\n MongoDB is connected
            ${connectionInstance.connection.host}`)
                // the address of the connection instance


    } catch (error) {
        console.log("MongoDB connection failed", error)
        process.exit(1) //when it fails it exists and the process moves to another task


    }
}

export default connectDB