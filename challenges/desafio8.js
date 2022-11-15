db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.exemplo.find({}, {
  nome: 1,
  _id: 0,
});