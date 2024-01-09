import api from "../service/api";
import { useState } from "react";


function Cadastrar() {
    const [users, setUsers] = useState([]);

    const funcCadUser = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const newUser = {
            nome: formData.get("nome"),
            sobrenome: formData.get("sobrenome"),
            email: formData.get("email"),
            senha: formData.get("senha"),
        };
        api.post("/users", newUser).then((response) => {
            console.log(response);
            setUsers([...users, response.data]);
            alert("Usuario cadastrado com sucesso!");
        });
    };
    return (
        <>
            <form className="formcad" onSubmit={(e) => funcCadUser(e)}>
                <h3>
                    Faça seu cadastro no site "MEU TIMBRE" preenchendo os campos abaixo
                    com seus dados!
                </h3>
                <div className="row">
                    <div className="form-floating col">
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Nome"
                            name="nome"
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="form-floating col">
                        <input
                            type="text"
                            className="form-control"
                            id="sobrenome"
                            placeholder="Sobrenome"
                            name="sobrenome"
                        />
                        <label htmlFor="sobrenome">Sobrenome</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-floating col-md-12">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="e-mail"
                            name="email"
                        />
                        <label htmlFor="email">e-mail</label>
                    </div>
                    <div className="row">
                        <div className="form-floating col">
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                placeholder="Senha"
                                name="senha"
                            />
                            <label htmlFor="senha">Senha</label>
                        </div>
                        <div className="form-floating col">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword2"
                                placeholder="Confirme sua senha"
                            />
                            <label htmlFor="inputPassword2">Confirme sua senha</label>
                        </div>
                    </div>
                </div>
                <div className="checkcadastrar">
                    <div className="form-group">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                            />
                            <label className="form-check-label" for="gridCheck">
                                Aceito os termos do site "MEU TIMBRE".
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-dark"
                        role="button"
                        aria-pressed="true"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </>
    );
}

export default Cadastrar;
