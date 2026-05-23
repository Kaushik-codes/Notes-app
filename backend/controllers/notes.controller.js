import notesModel from "../models/user.model.js";

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    const note = await notesModel.create({
      title,
      content,
    });

    res.status(200).json({message:"Note saved successfully"});
  } catch (err) {
    res.status(500).json({message:"Internal server error"});
    console.log(err);
  }
}
