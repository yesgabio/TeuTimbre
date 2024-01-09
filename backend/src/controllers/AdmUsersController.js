const { sequelize } = require("../config/database");
const { AdmUser } = sequelize.models;

class AdmUsersController {
    async index(req, res) {
        AdmUser.findAll()
            .then((admusers) => {
                res.status(200).send(admusers);
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async read(req, res) {
        const matricula = Number(req.params.matricula);
        const senha = Number(req.params.senha);
        AdmUser.findAll({
            where: {
                matricula: matricula,
                senha: senha
            }})
            .then((admuser) => {
                admuser
                    ? res.status(200).json(admuser)
                    : res.status(404).json({ message: "Administrador não encontrado!" });
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async create(req, res) {
        const { nome, sobrenome, matricula, senha } = req.body;
        AdmUser.create({ nome, sobrenome, matricula, senha })
            .then((admuser) => {
                res.status(201).send(admuser);
            })
            .catch((e) => {
                res.status(500).json({ error: e, message: e.message });
            });
    }

    async update(req, res) {
        const id_adm = Number(req.params.id_adm);
        const { nome, sobrenome, matricula, senha } = req.body;

        const admuserExists = await AdmUser.findByPk(id_adm);

        if (admuserExists) {
            return AdmUser.update({ nome, sobrenome, matricula, senha }, { where: { id_adm: id_adm } })
                .then((response) => {
                    if (response[0] === 1) {
                        return res
                            .status(200)
                            .json({ message: "Administrador atualizado com sucesso!" });
                    }
                    return res.status(200).json({ message: "Nenhum dado alterado!" });
                })
                .catch((e) => {
                    res.status(500).json({ error: e, message: e.message });
                });
        }
        return res.status(404).json({ message: "Administrador não encontrado!" });
    }

    async delete(req, res) {
        const id_adm = Number(req.params.id_adm);
        AdmUser.destroy({ where: { id_user: id_user } }).then((response) => {
            if (response === 1) {
                return res
                    .status(200)
                    .json({ message: "Administrador deletado com sucesso!" });
            }
            return res.status(404).json({ message: "Administrador não encontrado!" });
        });
    }
}

module.exports = new AdmUsersController();
