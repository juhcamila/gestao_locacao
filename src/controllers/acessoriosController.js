const fs = require('fs')

module.exports = function(app) {
    let acessoriosModel = app.db.mongoose.model("Acessorios")

    return {
        listarAcessorios: function(req, res) {
            let search = req.body.search
            if (search) {
                acessoriosModel.find({
                    nome: new RegExp(search)
                })
                .then((acessorios) => {
                    res.json(acessorios)
                })
                .catch((err) => res.status(500).send(err))
            } else {
                acessoriosModel.find({})
                .then((acessorios) => {
                    res.json(acessorios)
                })
                .catch((err) => res.status(500).send(err))
            }
        },
        adicionar: (req, res) => {
            try {
                let acessorio = new acessoriosModel(req.body)
                acessorio.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`acessorio adicionado com sucesso - Id: ${acessorio.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar acessorio: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let acessorio = await acessoriosModel.findById(id)
                if(acessorio)
                    res.json(acessorio)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: async (req, res) => {
            let id = req.params.id
            let acessorio = req.body

            acessoriosModel.findByIdAndUpdate(id, { $set: acessorio } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar acessorio: ${err}`)
                else
                    res.send("acessorio atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            acessoriosModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir acessorio: ${err}`)
                else
                    res.send("acessorio excluído com sucesso")
            })
        }
    }
}