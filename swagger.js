const swaggerUi = require('swagger-ui-express');

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Blog API",
    version: "1.0.0"
  },
  paths: {
    "/api/articles": {
      get: { summary: "Get all articles" },
      post: { summary: "Create article" }
    }
  }
};

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};