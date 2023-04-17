db.produtos.find({ valoresNutricionais: {
$elemMatch: {
    quantidade: { $lt: 500 },
    tipo: "calorias",
},
} }, { nome: true, _id: false });