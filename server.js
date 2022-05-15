const express = require('express');
const path = require('path');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.use(routes);

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/projects.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});