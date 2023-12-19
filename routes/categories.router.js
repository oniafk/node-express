const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    categories.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
    });
  }
  res.json(categories);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// tambien podemos generar rutas con query params, funcionan para filtrar, ordenar, etc
// estos son opcionales, por ejemplo paginas de productos, paginacion para limit y offset
//filtros, region, brand, etc

module.exports = router;
