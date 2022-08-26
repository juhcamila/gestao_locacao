module.exports = (app) => {
    app.get("/estado_veiculos", app.controllers.estadoVeiculosController.listarEstados)
    app.get("/estado_veiculos/:id", app.controllers.estadoVeiculosController.consultarPorId)
    app.post("/estado_veiculos", app.controllers.estadoVeiculosController.adicionar)
    app.put("/estado_veiculos/:id", app.controllers.estadoVeiculosController.atualizar)
    app.delete("/estado_veiculos/:id", app.controllers.estadoVeiculosController.excluir)
}