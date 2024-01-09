const express = require("express");
const routes = express.Router();

const UsersController = require("./controllers/UsersController");

routes.get("/users", UsersController.index);
routes.get("/users/:email/:senha", UsersController.read);
routes.get("/users/:id_user", UsersController.readID);
routes.delete("/users/:id_user", UsersController.delete);
routes.put("/users/:id_user", UsersController.update);
routes.post("/users", UsersController.create);

const AdmUsersController = require("./controllers/AdmUsersController");

routes.get("/admusers", AdmUsersController.index);
routes.get("/admusers/:matricula/:senha", AdmUsersController.read);
routes.delete("/admusers/:id_adm", AdmUsersController.delete);
routes.put("/admusers/:id_adm", AdmUsersController.update);
routes.post("/admusers", AdmUsersController.create);

const ProductsController = require("./controllers/ProductsController");

routes.get("/products", ProductsController.index);
routes.get("/products/:id_acervo", ProductsController.read);
routes.delete("/products/:id_acervo", ProductsController.delete);
routes.put("/products/:id_acervo", ProductsController.update);
routes.post("/products", ProductsController.create);

const AcervoUsersController = require("./controllers/AcervoUsersController");

routes.get("/acervousers", AcervoUsersController.index);
routes.get("/acervousers/:user_id", AcervoUsersController.read);
routes.delete("/acervousers/:user_id/:acervo_id", AcervoUsersController.delete);
routes.post("/acervousers", AcervoUsersController.create);

// Rota não encontrada
routes.use("*", (req, res) =>
    res.status(404).json({ message: "Rota não encontrada!" })
);

module.exports = routes;