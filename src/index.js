require('dotenv').config()
const APP_PORT = process.env.APP_PORT || 5000;
const express = require('express');

const notesRoutes = require('./routes/notes');

const middlewareLogRequest = require('./middleware/logs')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/notes', notesRoutes);

app.listen(APP_PORT, () => {
    console.log(`Server berhasil di running di port ${APP_PORT}`);
})