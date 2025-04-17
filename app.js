const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/posts', (req, res) => {
    res.send("Lista dei post");
})
app.get('/posts/:id', (req, res) => {
    res.send("Dettagli del post" + req.params.id);
})
app.post('/posts', (req, res) => {
    res.send("Inserimento di un nuovo post");
})
app.put('/posts/:id', (req, res) => {
    res.send("Modifica totale del post" + req.params.id);
})
app.patch('/posts/:id', (req, res) => {
    res.send("Modifica parziale del post" + req.params.id);
})
app.delete('/posts/:id', (req, res) => {
    res.send("Rimozione del post" + req.params.id);
})

app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})