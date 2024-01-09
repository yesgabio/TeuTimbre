const { sequelize } = require("../config/database");
const { AcervoUser } = sequelize.models;

class AcervoUsersController {
    async index(req, res) {
        AcervoUser.findAll()
            .then((acervousers) => {
                res.status(200).send(acervousers);
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async read(req, res) {
        const user_id = Number(req.params.user_id);
        AcervoUser.findAll({
            where: {
                user_id: user_id
            }
        })
            .then((acervouser) => {
                acervouser
                    ? res.status(200).json(acervouser)
                    : res.status(404).json({ message: "Acervo de usuário não encontrado!" });
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async create(req, res) {
        const { user_id, acervo_id, nome_disco, nome_artista, foto } = req.body;
        AcervoUser.create({ user_id, acervo_id, nome_disco, nome_artista, foto })
            .then((acervouser) => {
                res.status(201).send(acervouser);
            })
            .catch((e) => {
                res.status(500).json({ error: e, message: e.message });
            });
    }

    async delete(req, res) {
        const user_id = Number(req.params.user_id);
        const acervo_id = Number(req.params.acervo_id);
        AcervoUser.destroy({
            where: {
                user_id: user_id,
                acervo_id: acervo_id
            }
        })
            .then((response) => {
                if (response === 1) {
                    return res
                        .status(200)
                        .json({ message: "Album do usuário deletado com sucesso!" });
                }
                return res.status(404).json({ message: "Album do usuário não encontrado!" });
            });
    }
}

module.exports = new AcervoUsersController();
