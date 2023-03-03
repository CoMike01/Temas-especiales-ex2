const express = require('express');
const app = express();

const PORT = 3000;

app.get('/random',(_,res) => {
  res.send({
    // Definir una función que genera un número aleatorio entre dos valores
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Llamar a la función para generar un número aleatorio entre 1 y 10
var numeroAleatorio = generarNumeroAleatorio(1, 10);
  });
});

app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});

app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});
