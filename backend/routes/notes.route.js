import { Router } from "express";
import * as notesController from '../controllers/notes.controller.js'

const router = Router();

router.post('/send-notes',notesController.sendNotes);


export default router;