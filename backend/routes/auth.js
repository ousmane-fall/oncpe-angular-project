const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const SECRET_KEY = 'ousmane';

// Inscription (POST /register)
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      role: role || 'user'
    });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé', user: newUser });
  } catch (error) {
    console.error("Erreur dans /register :", error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// Connexion (POST /login)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: 'Utilisateur non trouvé' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Mot de passe incorrect' });

    // Envoie du rôle dans la réponse (vous pouvez aussi créer un token JWT incluant le rôle)
    res.json({ message: 'Connexion réussie', role: user.role, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

module.exports = router;
