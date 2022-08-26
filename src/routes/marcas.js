module.exports = (app) => {
    app.get("/marcas/", app.controllers.marcasController.listarMarcas)
    app.get("/marcas/:id", app.controllers.marcasController.consultarPorId)
    app.post("/marcas", app.controllers.marcasController.adicionar)
    app.put("/marcas/:id", app.controllers.marcasController.atualizar)
    app.delete("/marcas/:id", app.controllers.marcasController.excluir)
}