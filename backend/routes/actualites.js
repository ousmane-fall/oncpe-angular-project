const express = require('express');
const mongoose = require('mongoose');
const Actualites = require('../models/Actualites');
const isAdmin = require('../middlewares/isAdmin');


const router = express.Router();


// Ajouter une actualité (admin seulement)
router.post('/', isAdmin, async (req, res) => {
  try {
    const actualite = new Actualite(req.body);
    await actualite.save();
    res.status(201).json(actualite);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// Supprimer une actualité (admin seulement)
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    await Actualite.findByIdAndDelete(req.params.id);
    res.json({ message: 'Actualité supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// Créer une actualité
router.post('/', async (req, res) => {
  try {
    // Validation des champs obligatoires
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send({ error: 'Title and content are required' });
    }

    const actualite = new Actualites(req.body);
    await actualite.save();
    res.status(201).send(actualite);
  } catch (error) {
    res.status(400).send({ error: 'Failed to create actualité', details: error.message });
  }
});

// Récupérer toutes les actualités
router.get('/', async (req, res) => {
  try {
    const actualites = await Actualites.find().sort({ date: -1 });

    if (actualites.length === 0) {
      return res.send([
        {
          title: "Actualité par défaut",
          content: "Ceci est une actualité par défaut.",
          imageUrl: "https://via.placeholder.com/150",
          date: new Date(),
        },
      ]);
    }

    res.send(actualites);
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités :', error.message);
    res.status(500).send({ error: 'Failed to fetch actualités', details: error.message });
  }
});


// Récupérer une actualité par ID
router.get('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const actualite = await Actualites.findById(req.params.id);
    if (!actualite) return res.status(404).send({ error: 'Actualité not found' });
    res.send(actualite);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch actualité', details: error.message });
  }
});

// Mettre à jour une actualité
router.put('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const actualite = await Actualites.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!actualite) return res.status(404).send({ error: 'Actualité not found' });
    res.send(actualite);
  } catch (error) {
    res.status(400).send({ error: 'Failed to update actualité', details: error.message });
  }
});

// Supprimer une actualité
router.delete('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const actualite = await Actualites.findByIdAndDelete(req.params.id);
    if (!actualite) return res.status(404).send({ error: 'Actualité not found' });
    res.send({ message: 'Actualité deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete actualité', details: error.message });
  }
});

module.exports = router;
