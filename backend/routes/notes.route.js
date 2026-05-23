import { Router } from "express";
import * as notesController from '../controllers/notes.controller.js'

const router = Router();

router.post('/create-note',notesController.createNote);


export default router;