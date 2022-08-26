const mongoose = require('mongoose');

module.exports = app => {
    let ModelosSchema = app.db.mongoose.Schema({
        id_marca: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Marcas',
            required: [true, 'é obrigatório']
        },
        nome_modelo: {
            type: String,
            required: [true, 'Informe o modelo']
        }
    })
    app.db.mongoose.model("Modelos", ModelosSchema)
}