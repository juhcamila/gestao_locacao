module.exports = function(app) {
    let marcasModel = app.db.mongoose.model("Marcas")

    return {
        listarMarcas: function(req, res) {
            let search = req.body.search
            marcasModel.find({
                nome: new RegExp(search)
            })
            .then((marcas) => {
                res.json(marcas)
            })
            .catch((err) => res.status(500).send(err))
        },
        adicionar: (req, res) => {
            try {
                let marca = new marcasModel(req.body)
                marca.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`Marca adicionado com sucesso - Id: ${marca.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar marca: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let marca = await marcasModel.findById(id)
                if(marca)
                    res.json(marca)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: async (req, res) => {
            let id = req.params.id
            let marca = req.body

            marcasModel.findByIdAndUpdate(id, { $set: marca } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar marca: ${err}`)
                else
                    res.send("Marca atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            marcasModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir marca: ${err}`)
                else
                    res.send("Marca excluído com sucesso")
            })
        }
    }
}