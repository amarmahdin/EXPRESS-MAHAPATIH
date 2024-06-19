const express = require('express');

const NotesController = require('../controller/notes.js');

const router = express.Router();

// CREATE - GET
router.get('/', NotesController.getAllNotes);

// CREATE - GET
router.get('/:idNote', NotesController.getIdNotes);

// READ - POST
router.post('/', NotesController.createNewNotes);

// UPDATE - PATCH
router.patch('/:idNote', NotesController.updateNotes);

// DELETE - DELETE
router.delete('/:idNote', NotesController.deleteNotes);



module.exports = router;