const mongoose = require('mongoose');

// Définir le schéma pour les publications
const publicationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  fileUrl: {
    type: String,
    required: true // URL vers le fichier PDF ou autre ressource
  },
  tags: {
    type: [String], // Liste de tags associés
  },
  category: {
    type: String, // Catégorie de la publication
  }
});

const Publication = mongoose.model('Publication', publicationsSchema);

module.exports = Publication;
