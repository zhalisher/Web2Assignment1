const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.post('/submit', (req, res) => {
    console.log(req.body);

    res.send(`
        <h2>Thanks, ${req.body.name}!</h2>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>
    `);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));