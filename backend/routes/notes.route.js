import { Router } from "express";
import * as notesController from '../controllers/notes.controller.js'

const router = Router();

router.post('/create-note',notesController.createNote);
router.get('/read-note',notesController.readNote);


export default router;