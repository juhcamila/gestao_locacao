const fs = require('fs')

module.exports = function(app) {
    let veiculosModel = app.db.mongoose.model("Veiculos")

    return {
        listarVeiculos: function(req, res) {
            let search = req.body.search
            if (search) {
                veiculosModel.find({
                    nome: new RegExp(search)
                })
                .then((veiculos) => {
                    res.json(veiculos)
                })
                .catch((err) => res.status(500).send(err))
            } else {
                veiculosModel.find({})
                .then((veiculos) => {
                    res.json(veiculos)
                })
                .catch((err) => res.status(500).send(err))
            }

        },
        adicionar: (req, res) => {
            try {
                let veiculo = new veiculosModel(req.body)
                veiculo.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`veiculo adicionado com sucesso - Id: ${veiculo.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar veiculo: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let veiculo = await veiculosModel.findById(id)
                if(veiculo)
                    res.json(veiculo)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: async (req, res) => {
            let id = req.params.id
            let veiculo = req.body

            veiculosModel.findByIdAndUpdate(id, { $set: veiculo } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar veiculo: ${err}`)
                else
                    res.send("veiculo atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            veiculosModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir veiculo: ${err}`)
                else
                    res.send("veiculo excluído com sucesso")
            })
        }
    }
}