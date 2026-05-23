import notesModel from "../models/user.model.js";

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    const note = await notesModel.create({
      title,
      content,
    });

    res.status(200).json({ message: "Note saved successfully", note });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    console.log(err);
  }
}

export async function readNote(req, res) {
  try {
    const { title } = req.body;

    const note = await notesModel.findOne({ title });
    const date = new Date(note.updatedAt).toLocaleString();

    res.status(200).json({
      message: "Note fetched successfully",
      note: {
        title: note.title,
        description: note.content,
        time: date
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    console.log(err);
  }
}
