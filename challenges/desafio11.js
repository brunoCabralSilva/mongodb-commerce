db.exemplo.find(
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
    vendidos: 1,
  },
);