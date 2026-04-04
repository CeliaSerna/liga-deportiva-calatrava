const path = require('path');// le indicamos donde ir
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

// Servir los archivos estáticos de la carpeta "dist" (donde Angular guarda la web compilada)
app.use(express.static(path.join(__dirname, '../dist/liga-deportiva-calatrava/browser')));

//Si se pide cualquier cosa que no sea /api, se manda al index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/liga-deportiva-calatrava/browser/index.html'));
});

//CONEXIÓN A MONGODB 
//ESTA RUTA NO USA SRV                                                                                                                                                                                  //FUNDAMENTAL PONER EL NOMBRE DE LA BASE DE DATOS ENTRE / Y ?
mongoose.connect('mongodb://c123elia:IESCalatrava@ac-2cswkyn-shard-00-00.opzwkjx.mongodb.net:27017,ac-2cswkyn-shard-00-01.opzwkjx.mongodb.net:27017,ac-2cswkyn-shard-00-02.opzwkjx.mongodb.net:27017/liga-deportiva-calatrava?ssl=true&replicaSet=atlas-q0iezm-shard-0&authSource=admin&appName=Cluster0')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

//ARRANCAR SERVIDOR EN LOCAL
//app.listen(3000, () => {
//  console.log('Servidor backend en http://localhost:3000');
//});

// Usamos el puerto de Render o el 3000 para local
const PORT = process.env.PORT || 3000;

// Arrancamos el servidor escuchando en '0.0.0.0'
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor backend funcionando en el puerto ${PORT}`);
});
 