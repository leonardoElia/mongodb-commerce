db.produtos.find({ valoresNutricionais: {
    $elemMatch: {
        percentual: {
            $gte: 30,
            $lte: 40,
        },

        tipo: "proteínas",
    },
} }, { nome: true, _id: false });