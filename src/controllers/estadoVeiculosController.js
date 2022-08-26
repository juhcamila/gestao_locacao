const fs = require('fs')

module.exports = function(app) {
    let estadoVeiculosModel = app.db.mongoose.model("EstadoVeiculos")

    return {
        listarEstados: function(req, res) {
            let search = req.body.search
            if (search) {
                estadoVeiculosModel.find({
                    nome: new RegExp(search)
                })
                .then((estados) => {
                    res.json(estados)
                })
                .catch((err) => res.status(500).send(err))
            } else {
                estadoVeiculosModel.find({})
                .then((estados) => {
                    res.json(estados)
                })
                .catch((err) => res.status(500).send(err))
            }
        },
        adicionar: (req, res) => {
            try {
                let estado = new estadoVeiculosModel(req.body)
                estado.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`estado adicionado com sucesso - Id: ${estado.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar estado: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let estado = await estadoVeiculosModel.findById(id)
                if(estado)
                    res.json(estado)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: async (req, res) => {
            let id = req.params.id
            let estado = req.body

            estadoVeiculosModel.findByIdAndUpdate(id, { $set: estado } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar estado: ${err}`)
                else
                    res.send("estado atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            estadoVeiculosModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir estado: ${err}`)
                else
                    res.send("estado excluído com sucesso")
            })
        }
    }
}