db.produtos.updateMany({}, 
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  });
  
db.produtos.updateMany({
  nome: "Big Mac",
}, 
{
  $inc: {
    "vendasPorDia.3": 60,
  },
});
  
db.produtos.updateMany({
  tags: { $all: ["bovino"] },
}, 
{
  $inc: {
    "vendasPorDia.7": 120,
  },
});
  
db.produtos.find({}, 
{
  nome: 1,
  tags: 1,
  vendasPorDia: 1,
  _id: -1,
});