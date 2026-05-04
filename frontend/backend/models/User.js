const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  usuario: String, // muy importante que sea usuario como en el resto de archivos
  password: String,
  role: String
});

module.exports = mongoose.model('User', UserSchema);
