const { sequelize } = require("../config/database");
const { Product } = sequelize.models;

class ProductsController {
  async index(req, res) {
    Product.findAll()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async read(req, res) {
    const id_acervo = Number(req.params.id_acervo);
    Product.findByPk(id_acervo)
      .then((product) => {
        product
          ? res.status(200).json(product)
          : res.status(404).json({ message: "Produto não encontrado!" });
      })
      .catch((e) => {
        res.status(500).json({ error: e.message });
      });
  }

  async create(req, res) {
    const { nome_disco, nome_artista, foto } = req.body;
    Product.create({ nome_disco, nome_artista, foto })
      .then((product) => {
        res.status(201).send(product);
      })
      .catch((e) => {
        res.status(500).json({ error: e, message: e.message });
      });
  }

  async update(req, res) {
    const id_acervo = Number(req.params.id_acervo);
    const { nome_disco, nome_artista, foto } = req.body;

    const productExists = await Product.findByPk(id_acervo);

    if (productExists) {
      return Product.update({ nome_disco, nome_artista, foto }, { where: { id_acervo: id_acervo } })
        .then((response) => {
          if (response[0] === 1) {
            return res
              .status(200)
              .json({ message: "Produto atualizado com sucesso!" });
          }
          return res.status(200).json({ message: "Nenhum dado alterado!" });
        })
        .catch((e) => {
          res.status(500).json({ error: e, message: e.message });
        });
    }
    return res.status(404).json({ message: "Produto não encontrado!" });
  }

  async delete(req, res) {
    const id_acervo = Number(req.params.id_acervo);
    Product.destroy({ where: { id_acervo: id_acervo } }).then((response) => {
      if (response === 1) {
        return res
          .status(200)
          .json({ message: "Produto deletado com sucesso!" });
      }
      return res.status(404).json({ message: "Produto não encontrado!" });
    });
  }

}

module.exports = new ProductsController();