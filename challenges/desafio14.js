db.produtos.find(
  {
    ingredientes: { $all: ["picles"] },
  },
  {
    nome: 1,
    ingredientes: 1,
    valoresNutricionais: 1,
    _id: 0,
  },
);
