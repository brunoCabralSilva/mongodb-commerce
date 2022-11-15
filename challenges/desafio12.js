db.produtos.updateMany(
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
