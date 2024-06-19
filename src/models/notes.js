const dbPool = require('../config/database');

const getAllNotes = () => {
    const SQLQuery = 'SELECT * FROM notes';

    return dbPool.execute(SQLQuery);
}

const getIdNotes = (idNote) => {
    const SQLQuery = `SELECT * FROM notes WHERE id = ?`;
  
    return dbPool.execute(SQLQuery, [idNote]);
  };

const createNewNotes = (body) => {
    const datetime = new Date();
    const formattedDatetime = datetime.toISOString().slice(0, 19).replace('T', ' ');

    const SQLQuery = `  INSERT INTO notes (tittle,  datetime, note) 
                        VALUES ('${body.tittle}', '${formattedDatetime}', '${body.note}')`;
    return dbPool.execute(SQLQuery);
}

const updateNotes = (body, idNote) => {
    const datetime = new Date();
    const formattedDatetime = datetime.toISOString().slice(0, 19).replace('T', ' ');

    const SQLQuery = `  UPDATE notes 
                        SET tittle='${body.tittle}', datetime='${formattedDatetime}', note='${body.note}'
                        WHERE id=${idNote}`;

    return dbPool.execute(SQLQuery);
}

const deleteNotes = (idNote) => {
    const SQLQuery = `DELETE FROM notes WHERE id=${idNote}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllNotes,
    getIdNotes,
    createNewNotes,
    updateNotes,
    deleteNotes,
}