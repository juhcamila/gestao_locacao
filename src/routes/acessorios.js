module.exports = (app) => {
    app.get("/acessorios/", app.controllers.acessoriosController.listarAcessorios)
    app.get("/acessorios/:id", app.controllers.acessoriosController.consultarPorId)
    app.post("/acessorios", app.controllers.acessoriosController.adicionar)
    app.put("/acessorios/:id", app.controllers.acessoriosController.atualizar)
    app.delete("/acessorios/:id", app.controllers.acessoriosController.excluir)
}