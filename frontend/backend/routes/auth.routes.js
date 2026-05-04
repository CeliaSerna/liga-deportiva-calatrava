const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

router.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const user = await User.findOne({ usuario, password });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.json({
      usuario: user.usuario,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
