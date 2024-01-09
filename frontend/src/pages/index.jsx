import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import { useState } from "react";

function Index() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    const funcEntrarUser = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email")
        const senha = formData.get("senha")

        api.get(`/users/${email}/${senha}`)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
                const resposta = response.data
                const id = resposta.map(function(e) {return e.id_user})[0];
                console.log(id);
                if (resposta.length === 0) {
                    alert("Dados digitados incorretamente");
                } else {
                    return navigate(`/acervouser/${id}`)
                }
            })
            .catch((error) => {
                alert("Erro ao buscar usuário");
            });
    };

    return (
        <>
            <div className="conteudo">
                <div className="carrossel">
                    <div id="carousel-bags" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-bags" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-bags" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-bags" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://universoretro.com.br/8-dicas-de-como-cuidar-do-seu-disco-de-vinil-e-mante-lo-em-boas-condicoes-por-mais-tempo/" target="_blank">
                                <img src="https://images.pexels.com/photos/4383295/pexels-photo-4383295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="d-block w-100" alt="..." />
                                    </a>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Coleções</h5>
                                    <p>Dicas de como cuidar dos seus discos.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <a href="https://techdaora.com/melhores-toca-discos" target="_blanc">
                                <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                               className="d-block w-100" alt="..." id="img-bottom" />
                               </a>
                                <div className="carousel-caption d-none d-md-block" href="https://techdaora.com/melhores-toca-discos">
                                    <h5>Toca Discos</h5>
                                    <p>Lista dos principais toca discos no mercado.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <a href="https://www.youtube.com/watch?v=2AwKolrwsZE" target="_blank">

                                <img src="https://images.pexels.com/photos/6002001/pexels-photo-6002001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="d-block w-100" alt="..." />
                                    </a>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Setups pelo mundo</h5>
                                    <p>Colecionadores enviam seus cantinhos da música.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-bags"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-bags"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="login">
                    <form onSubmit={(e) => funcEntrarUser(e)}>
                        <h3>Acesse sua coleção!</h3>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="senha" />
                            <label htmlFor="senha">Senha</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" >Lembrar meus dados.</label>
                        </div>
                        <div className="botoes">
                            <button type="submit" className="btn btn-dark" >Entrar</button>
                            <Link type="text" className="btn btn-dark" role="button" aria-pressed="true" target="_blank" to='/cadastrar'>Cadastrar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index;