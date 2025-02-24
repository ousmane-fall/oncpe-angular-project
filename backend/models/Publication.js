// backend/models/Publication.js

const mongoose = require('mongoose');

// Définir le schéma pour les publications
const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Chiffres clés', 'Etudes de cas', 'Analyses thématiques'], // Catégories disponibles
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  downloadFile: {
    type: String,
    required: true
  },
  documentId: {
    type: Number,
    required: true
  }
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
