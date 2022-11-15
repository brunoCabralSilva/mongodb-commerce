db.produtos.find(
  {
    $nor: [
      {
        nome: { $eq: "Big Mac" },
      },
      {
        nome: { $eq: "McChicken" },
      },
    ],
  },
  {
    nome: 1,
    _id: 0,
    curtidas: 1,
    vendidos: 1,
  },
);