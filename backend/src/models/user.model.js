import { Timestamp } from "mongodb"
import mongose, { Schema } from mongose //means structure

const userSchema = new Schema (
    {
     username: {
        type: String,
        required: true, // is it important
        unique: true, // is it special
        lowercase: true,
        trim: true, // this is used for the white spaces
        minLength: 1,
        maxLength: 20
    },

    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
        }

    },
    {
        timestamps: true //always get timestamps of every user
    }


)

export const User = mongose.model("user", userSchema)