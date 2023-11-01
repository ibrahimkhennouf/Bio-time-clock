/* eslint-disable @typescript-eslint/no-explicit-any */

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bio time clock API',
      description:
        'This is an api for  bio time clock made with express and documented with Swagger',
      version: '1.0.0',
      contact: {
        name: 'khennouf ibrahim',
        email: 'ibrahimkhennouf10@gmail.com',
      },
    },
  },
  apis: ['./src/routers/*.ts', './src/models/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: any) {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;
