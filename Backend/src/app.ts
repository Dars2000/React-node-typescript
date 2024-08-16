import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import itemRoutes from './routes/itemRoutes';

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Item API',
      version: '1.0.0',
      description: 'API for managing items',
    },
  },
  apis: ['./routes/itemRoutes.ts'], // Path to the API routes
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middleware and routes
app.use(express.json());
app.use('/api', itemRoutes);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
