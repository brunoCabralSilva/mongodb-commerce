db.produtos.updateMany(
  {
    $or: [
      { nome: "Big Mac" },
      { nome: "Quarteirão com Queijo" },
    ],
    ingredientes: { $not: { $all: ["bacon"] } },
  },
  {
    $push: { 
      ingredientes: "bacon",
    },
  },
);

db.produtos.find({}, 
{
  nome: 1,
  ingredientes: 1,
  _id: 0,
});