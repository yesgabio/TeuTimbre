import { useNavigate } from "react-router-dom";
import api from "../service/api";
import { useState } from "react";

function Loginadmin() {
    const [admusers, setAdmUsers] = useState([]);
    const navigate = useNavigate()

    const funcCadAdm = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const newUserAdm = {
            nome: formData.get("nome"),
            sobrenome: formData.get("sobrenome"),
            matricula: formData.get("matricula"),
            senha: formData.get("senha"),
        };
        api.post("/admusers", newUserAdm).then((response) => {
            console.log(response);
            setAdmUsers([...admusers, response.data]);
            alert("Administrador cadastrado com sucesso!");
        });
    };

    const funcEntrarAdm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const matricula = formData.get("matricula")
        const senha = formData.get("senha")
        console.log(matricula);
        console.log(senha);

        api.get(`/admusers/${matricula}/${senha}`)
            .then((response) => {
                console.log(response.data);
                setAdmUsers(response.data);
                const resposta = response.data
                if (resposta.length === 0) {
                    alert("Dados digitados incorretamente");
                } else {
                    return navigate("/gerenciamento")
                }
            })
            .catch((error) => {
                alert("Erro ao buscar Administrador");
            });
    };

    return (
        <>
            <div className="login">
                <form className="formcad" onSubmit={(e) => funcEntrarAdm(e)}>
                    <h3>Insira seus dados para acessar o gerenciamento!</h3>
                    <div className="form-floating col">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="matricula" name="matricula" />
                        <label htmlFor="matricula">Matricula</label>
                    </div>
                    <div className="form-floating col">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="senha" />
                        <label htmlFor="senha">Senha</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Lembrar meus dados.</label>
                    </div>
                    <div className="botoes">
                        <button type="submit" className="btn btn-dark" aria-pressed="true" target="_blank" >Entrar</button>
                    </div>
                </form>
            
            <form className="formcad" onSubmit={(e) => funcCadAdm(e)}>
                <h3>
                    Se você não possui cadastro de administrador, preencha os dados abaixo!
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
                    <div className="form-floating col">
                        <input
                            type="matricula"
                            className="form-control"
                            id="matricula"
                            placeholder="matricula"
                            name="matricula"
                        />
                        <label htmlFor="matricula">Matricula</label>
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
            </div>
        </>
    );
}
export default Loginadmin;