const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

//CONEXIÓN A MONGODB 
//ESTA RUTA NO USA SRV
                                                                                                                                                                                        //FUNDAMENTAL PONER EL NOMBRE DE LA BASE DE DATOS ENTRE / Y ?
mongoose.connect('mongodb://c123elia:IESCalatrava@ac-2cswkyn-shard-00-00.opzwkjx.mongodb.net:27017,ac-2cswkyn-shard-00-01.opzwkjx.mongodb.net:27017,ac-2cswkyn-shard-00-02.opzwkjx.mongodb.net:27017/liga-deportiva-calatrava?ssl=true&replicaSet=atlas-q0iezm-shard-0&authSource=admin&appName=Cluster0')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

//ARRANCAR SERVIDOR
app.listen(3000, () => {
  console.log('Servidor backend en http://localhost:3000');
});
 