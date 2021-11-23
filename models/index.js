const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "exercise type"
            },
            name: { 
                type: String,
                trim: true,
                 required: "name of exercise"
            },
            duration: {
                type: Number,
                required: "exercise duration"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ],
})

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;