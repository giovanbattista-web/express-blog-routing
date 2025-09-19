// IMPORTO EXPRESS
const express = require('express');

// IMPORTIAMO LA CLASSE ROUTER DI EXPRESS
const router = express.Router();

// DEFINIAMO LE ROTTE PER I POST 
// INDEX 
router.get('/', (req, res) => {
    res.send('Elenco dei post');
})

// SHOW 
router.get('/:id', (req, res) => {
    res.send(`Post con id : ${req.params.id}`);
})

// STORE
router.post('/', (req, res) => {
    res.send("Inserimento di un nuovo post");
})

// UPDATE
router.put('/:id', (req, res) => {
    res.send(`Modifica totale del post con id : ${req.params.id}`);
})

// MODIFY
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post con id : ${req.params.id}`);
})

// DESTROY
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post con id : ${req.params.id}`);
})

// ESPORTO IL ROUTER 
module.exports = router;

