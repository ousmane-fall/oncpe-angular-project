const express = require('express');
const ParcoursCPE = require('./models/ParcoursCPE'); // Le modèle créé précédemment
const router = express.Router();

// Récupérer toutes les étapes du parcours
router.get('/parcours', async (req, res) => {
  try {
    const parcours = await ParcoursCPE.find().sort({ order: 1 });
    res.json(parcours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Récupérer les étapes du parcours en fonction du type (public, privé, copropriété)
router.get('/parcours/:type', async (req, res) => {
  try {
    const parcours = await ParcoursCPE.find({ stepType: req.params.type }).sort({ order: 1 });
    res.json(parcours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
