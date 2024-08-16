import express, { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation for your project',
  },
  servers: [
    {
      url: 'http://localhost:5001/api',
      description: 'API server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/**/*.ts'], // Ruta a los archivos de las rutas para generar la documentación
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
