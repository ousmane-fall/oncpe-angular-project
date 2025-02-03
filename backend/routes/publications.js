const express = require('express');
const mongoose = require('mongoose');
const Publication = require('../models/Publication');

const router = express.Router();

// Créer une publication
router.post('/', async (req, res) => {
  try {
    const { title, description, author, fileUrl } = req.body;

    // Validation des champs obligatoires
    if (!title || !description || !author || !fileUrl) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    const publication = new Publication(req.body);
    await publication.save();
    res.status(201).send(publication);
  } catch (error) {
    console.error('Erreur lors de la création de la publication:', error.message);
    res.status(400).send({ error: 'Failed to create publication', details: error.message });
  }
});

// Récupérer toutes les publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find().sort({ date: -1 });

    if (publications.length === 0) {
      return res.status(200).send([
        {
          title: "Exemple de publication",
          description: "Ceci est une publication par défaut.",
          author: "Admin",
          fileUrl: "https://example.com/fichier.pdf",
          date: new Date(),
        },
      ]);
    }

    res.send(publications);
  } catch (error) {
    console.error('Erreur lors de la récupération des publications:', error.message);
    res.status(500).send({ error: 'Failed to fetch publications', details: error.message });
  }
});

// Récupérer une publication par ID
router.get('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const publication = await Publication.findById(req.params.id);

    if (!publication) {
      return res.status(404).send({ error: 'Publication not found' });
    }

    res.send(publication);
  } catch (error) {
    console.error(`Erreur lors de la récupération de la publication ${req.params.id}:`, error.message);
    res.status(500).send({ error: 'Failed to fetch publication', details: error.message });
  }
});

// Mettre à jour une publication
router.put('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const publication = await Publication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!publication) {
      return res.status(404).send({ error: 'Publication not found' });
    }

    res.send(publication);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la publication ${req.params.id}:`, error.message);
    res.status(400).send({ error: 'Failed to update publication', details: error.message });
  }
});

// Supprimer une publication
router.delete('/:id', async (req, res) => {
  try {
    // Validation de l'ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    const publication = await Publication.findByIdAndDelete(req.params.id);

    if (!publication) {
      return res.status(404).send({ error: 'Publication not found' });
    }

    res.send({ message: 'Publication deleted successfully' });
  } catch (error) {
    console.error(`Erreur lors de la suppression de la publication ${req.params.id}:`, error.message);
    res.status(500).send({ error: 'Failed to delete publication', details: error.message });
  }
});

module.exports = router;
