module.exports = app => {
    let MarcasSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
    })
    app.db.mongoose.model("Marcas", MarcasSchema)
}