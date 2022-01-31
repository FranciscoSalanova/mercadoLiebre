const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/home.html'));
});

app.get('/registroUsuario', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/register.html'));
});

app.get('/loginUsuario', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/login.html'));
});