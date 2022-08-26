module.exports = (app) => {
    app.get("/modelos/", app.controllers.modelosController.listarModelos)
    app.get("/modelos/:id", app.controllers.modelosController.consultarPorId)
    app.post("/modelos", app.controllers.modelosController.adicionar)
    app.put("/modelos/:id", app.controllers.modelosController.atualizar)
    app.delete("/modelos/:id", app.controllers.modelosController.excluir)
}