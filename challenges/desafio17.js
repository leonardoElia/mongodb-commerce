const totalProdutos = db.produtos.find().count();
db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos });
db.resumoProdutos.find({}, { _id: false });