// backend/routes/publications.js

const express = require('express');
const Publication = require('../models/Publication');
const router = express.Router();

// Route pour récupérer toutes les publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find();
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des publications' });
  }
});

// Route pour récupérer les publications par catégorie
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const publications = await Publication.find({ category });
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des publications par catégorie' });
  }
});

// Route pour ajouter une publication
router.post('/', async (req, res) => {
  const { title, description, category, date, image, downloadFile, documentId } = req.body;

  // Validation des données
  if (!title || !description || !category || !date || !image || !downloadFile || !documentId) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const newPublication = new Publication({
      title,
      description,
      category,
      date,
      image,
      downloadFile,
      documentId
    });

    await newPublication.save();
    res.status(201).json(newPublication);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la publication' });
  }
});

module.exports = router;
