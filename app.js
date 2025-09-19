// IMPORTO EXPRESS
const express = require('express');

// INIZIALIZZO EXPRESS NELLA VARIABILE APP 
const app = express();

// INIZIALIZZO IL NUMERO DI PORTA 
const port = 3000;

// IMPORTO IL ROUTER 
const postRouter = require('./routers/posts.js');

// UTILIZZO IL ROUTER PER DEFINIRE LE VARIE ROTTE PER I POSTS
app.use('/posts', postRouter);

// DEFINISCO LA ROTTA BASE
app.get('/', (req, res) => {
    res.send("Home Page");
})

// SERVER IN ASCOLTO SULLA PORTA 3000 
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})
