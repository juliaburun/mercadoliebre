const express = require('express')
const path = require('path')
// Crear el servidor de express
const app = express()
// Directorio Publico
app.use(express.static('public'))

// Rutas
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})
app.post('/registro', (req, res) => {
    res.redirect('/');
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.post('/ingreso', (req, res) => {
    res.redirect('/');
});

// Escuchar peticiones
app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000')
})