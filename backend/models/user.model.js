import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required"]
    },
    content: {
        type: String,
        required: [true,"Note must not be empty"]
    }
},{timestamps: true});

const notesModel = mongoose.model("notes",notesSchema);

export default notesModel;