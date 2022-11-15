db.produtos.find(
  {
    "valoresNutricionais.quantidade": { $lt: 500 },
  },
  {
    nome: 1,
    _id: 0,
  },
);