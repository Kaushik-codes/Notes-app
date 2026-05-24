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

export async function getNotes(req, res) {
  try {
    const response = await notesModel.find().sort({ updatedAt: -1 });

    const allNotes = response.map((note) => {
      return {
        title: note.title,
        description: note.content,
        date: new Date(note.updatedAt).toLocaleString()
      }
    });

    res.status(200).json({
      message: "Notes fetched successfully",
      data: allNotes,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    console.log(err);
  }
}

export async function searchNotes(req, res) {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Please provide a search query",
      });
    }

    /*Find notes where the title OR the content contains the search word (q).
    Ignore case (uppercase/lowercase).*/
    const notes = await notesModel
      .find({
        $or: [
          { title: { $regex: q, $options: "i" } },
          { content: { $regex: q, $options: "i" } },
        ],
      })
      .sort({ updatedAt: -1 });

      const result = notes.map((note)=>{
        return {
          title: note.title,
        description: note.content,
        date: new Date(note.updatedAt).toLocaleString()
        }
      });
    res.status(200).json({
      success: true,
      notesCount: notes.length,
      data: result
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function updateNotes(req,res){
  try{
    const id = req.params.id;
    const update = req.body;
    const updatedNote = await notesModel.findByIdAndUpdate(id,update,{
      new : true,
      runValidators:true
    });

    if(!updatedNote){
      return res.status(403).json({ message: "Note not found" });
    }

    res.status(200).json({message:"Note updated successfully",update:updatedNote});

  }catch(err){
    res.status(500).json({ success: false, message: err.message });
  }
}