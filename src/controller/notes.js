const NotesModel = require('../models/notes');

const getAllNotes = async (req, res) => {
    try {

        const [data] = await NotesModel.getAllNotes();

        res.json({
            message: 'GET all notes success',
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getIdNotes = async (req, res) => {
    const { idNote } = req.params;
  
    try {
      const note = await NotesModel.findById(idNote);
  
      if (!note) {
        res.status(404).json({
          message: 'Note not found',
        });
      } else {
        res.json({
          message: 'GET id notes success',
          data: note,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  };

const createNewNotes = async (req, res) => {
    const {body}= req;

    try {
        await NotesModel.createNewNotes(body);
        res.json({
            message: 'CREATE new notes success',
            data: body
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateNotes = async (req, res) => {
    const {idNote} = req.params;
    const {body} = req;

    try {
        await NotesModel.updateNotes(body, idNote);
        res.json({
            message: 'UPDATE note success',
            data: {
                id: idNote,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteNotes = async (req, res) => {
    const {idNote} = req.params;
    try {
        await NotesModel.deleteNotes(idNote);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllNotes,
    getIdNotes,
    createNewNotes,
    updateNotes,
    deleteNotes,
}