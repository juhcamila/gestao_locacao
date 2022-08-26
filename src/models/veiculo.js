const mongoose = require('mongoose');

module.exports = app => {
    let veiculosSchema = app.db.mongoose.Schema({
        id_modelo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Modelos',
            required: [true, 'é obrigatório']
        },
        id_acessorios: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Acessorios',
            required: [true, 'é obrigatório']
        },
        cod_renavam: {
            type: String,
            required: [true, 'Digite o renavam']
        },
        chassi: {
            type: String,
            required: [true, 'Digite o número do chassi']
        },
        tipo: {
            type: String,
            required: [true, 'Digite o tipo do veículo']
        },
        placa: {
            type: String,
            required: [true, 'Digite a plava do veículo']
        },
        combustivel: {
            type: String,
            required: [true, 'Digite o combustível do veículo']
        },
        ano_fab: {
            type: String,
            required: [true, 'Digite o ano de fabricação do veículo']
        },
        ano_mod: {
            type: String,
            required: [true, 'Digite o ano do modelo do veículo']
        },
        cor: {
            type: String,
            required: [true, 'Digite a cor do veículo']
        }
    })

    app.db.mongoose.model("Veiculos", veiculosSchema)
}