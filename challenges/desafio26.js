db.produtos.updateMany({
    valoresNutricionais: { $elemMatch: { percentual: { $gt: 20, $lt: 40 }, tipo: "sódio" } } },
    { $push: { tags: "contém sódio" } });
db.produtos.find({}, { _id: false, nome: true, tags: true });