// IMPORTO EXPRESS
const express = require('express');

// INIZIALIZZO EXPRESS NELLA VARIABILE APP 
const app = express();

// INIZIALIZZO IL NUMERO DI PORTA 
const port = 3000;

// IMPORTO IL ROUTER 
const routerPosts = require('./routers/posts.js');

// UTILIZZO IL ROUTER PER DEFINIRE LE VARIE ROTTE PER I POSTS
app.use('/posts', routerPosts);

// DEFINISCO LA ROTTA BASE
app.get('/', (req, res) => {
    res.send("Home Page");
})

/*
app.get('/posts', (req, res) => {
    res.send("Lista dei post");
})
app.get('/posts/:id', (req, res) => {
    res.send("Dettaglio del post" + req.params.id);
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
    res.send("Cancellazione del post" + req.params.id);
})
*/

// DICIAMO AL SERVER DI RIMANERE IN ASCOLTO SULLA PORTA 3000 
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})
