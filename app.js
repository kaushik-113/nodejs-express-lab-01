const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/about', (req, res) => {
    res.json({
        name: 'K V KOWSHIKA BHARADWAJA',
        section: 'CSE-QE-2A / 113'
    });
});

app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Express server running on port 3000');
});