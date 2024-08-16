import express from 'express';
import mongoose from 'mongoose';
import itemRoutes from './routes/itemRoutes';
import { syncDataFromApi } from './services/externalApiService';
import swaggerDocs from './swagger';

const app = express();
const PORT = process.env.PORT || 5001;

// Swagger Documentation
swaggerDocs(app);

app.use(express.json());
app.use('/api', itemRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Sincronizar datos al iniciar el servidor
syncDataFromApi();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
