module.exports = (app) => {
    app.get("/veiculos/", app.controllers.veiculosController.listarVeiculos)
    app.get("/veiculos/:id", app.controllers.veiculosController.consultarPorId)
    app.post("/veiculos", app.controllers.veiculosController.adicionar)
    app.put("/veiculos/:id", app.controllers.veiculosController.atualizar)
    app.delete("/veiculos/:id", app.controllers.veiculosController.excluir)
}