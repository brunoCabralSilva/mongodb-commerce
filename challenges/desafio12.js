db.produtosupdateMany(
  {
    nome: { $ne: "McChicken" },
    ingredientes: { $not: { $all: ["ketchup"] } },
  },
  {
   $push: {
    ingredientes: "ketchup",
   },
  },
);
