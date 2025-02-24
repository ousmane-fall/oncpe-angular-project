const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


// Import des routes
const actualitesRoutes = require('./routes/actualites');
const publicationsRoutes = require('./routes/publications');
const authRoutes = require('./routes/auth');
//const parcoursRoutes = require('./routes/parcours');

dotenv.config();

const app = express();
app.use(express.json()); // Pour parser le JSON des requêtes entrantes
app.use(cors()); // Pour autoriser les requêtes cross-origin

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(' Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error(' Failed to connect to MongoDB:', err.message);
    process.exit(1); // Arrête le serveur en cas de problème
  });

// Définir les routes
app.use('/api/actualites', actualitesRoutes);
app.use('/api/publications', publicationsRoutes);
app.use('/api/auth', authRoutes);
//app.use('/api', parcoursRoutes);


// Exemple de route pour vérifier le serveur
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Route de santé pour vérifier la connexion à MongoDB
app.get('/health', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1; // 1 = Connected
  res.send({
    status: 'Backend is running...',
    database: isConnected ? 'Connected' : 'Not Connected',
  });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
