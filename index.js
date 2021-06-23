const express = require('express');
const repoContext = require('./repository/repository-wrapper');

const app = express();

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});

app.get('/', (req, res) => {
    return res.send('Postman Test');
});

app.get('/api/products', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});