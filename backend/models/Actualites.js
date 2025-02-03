const mongoose = require('mongoose');

// Définir le schéma pour les actualités
const actualitesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true // Supprime les espaces vides avant et après
  },
  content: {
    type: String,
    required: true
  },
  subtitle: {
    type: String, // Nouveau champ pour les sous-titres
    trim: true
  },
  date: {
    type: Date,
    default: Date.now // La date par défaut est celle de la création
  },
  imageUrl: {
    type: String // URL vers une image associée à l'actualité
  },
  link: {
    type: String // URL vers un lien associé
  },
  videoLink: {
    type: String // Lien vers une vidéo, si disponible
  },
  documents: [
    {
      id: Number, // ID du document
      title: String // Titre du document
    }
  ]
});

// Créer le modèle à partir du schéma
const Actualites = mongoose.model('Actualites', actualitesSchema);

module.exports = Actualites;
