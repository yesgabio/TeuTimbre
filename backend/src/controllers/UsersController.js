const { sequelize } = require("../config/database");
const { User } = sequelize.models;

class UsersController {
    async index(req, res) {
        User.findAll()
            .then((users) => {
                res.status(200).send(users);
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async read(req, res) {
        const email = String(req.params.email);
        const senha = String(req.params.senha);
        User.findAll({
            where: {
                email: email,
                senha: senha
            }})
            .then((user) => {
                user
                    ? res.status(200).json(user)
                    : res.status(404).json({ message: "Usuário não encontrado!" });
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async readID(req, res) {
        const id_user = Number(req.params.id_user);
        User.findByPk(id_user)
            .then((user) => {
                user
                    ? res.status(200).json(user)
                    : res.status(404).json({ message: "Usuário não encontrado!" });
            })
            .catch((e) => {
                res.status(500).json({ error: e.message });
            });
    }

    async create(req, res) {
        const { nome, sobrenome, email, senha } = req.body;
        User.create({ nome, sobrenome, email, senha })
            .then((user) => {
                res.status(201).send(user);
            })
            .catch((e) => {
                res.status(500).json({ error: e, message: e.message });
            });
    }

    async update(req, res) {
        const id_user = Number(req.params.id_user);
        const { nome, sobrenome, email, senha } = req.body;

        const userExists = await User.findByPk(id_user);

        if (userExists) {
            return User.update({ nome, sobrenome, email, senha }, { where: { id_user: id_user } })
                .then((response) => {
                    if (response[0] === 1) {
                        return res
                            .status(200)
                            .json({ message: "Usuário atualizado com sucesso!" });
                    }
                    return res.status(200).json({ message: "Nenhum dado alterado!" });
                })
                .catch((e) => {
                    res.status(500).json({ error: e, message: e.message });
                });
        }
        return res.status(404).json({ message: "Usuário não encontrado!" });
    }

    async delete(req, res) {
        const id_user = Number(req.params.id_user);
        User.destroy({ where: { id_user: id_user } }).then((response) => {
            if (response === 1) {
                return res
                    .status(200)
                    .json({ message: "Usuário deletado com sucesso!" });
            }
            return res.status(404).json({ message: "Usuário não encontrado!" });
        });
    }
}

module.exports = new UsersController();
