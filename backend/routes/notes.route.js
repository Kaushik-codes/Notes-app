import { Router } from "express";
import * as notesController from '../controllers/notes.controller.js'

const router = Router();

router.post('/create-note',notesController.createNote);
router.get('/get-notes',notesController.getNotes);
router.get('/search',notesController.searchNotes);
router.put('/update/:id',notesController.updateNotes);


export default router;