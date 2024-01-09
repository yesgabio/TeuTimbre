import { useParams } from "react-router-dom";
import api from "../service/api";
import { useEffect, useState } from "react";

function AcervoUser() {
    const { id } = useParams();
    const id_user = id;

    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [acervousers, setAcervoUsers] = useState([]);

    useEffect(() => {
        api
            .get(`/users/${id_user}`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                alert("Erro ao buscar usuário");
            });
    }, []);

    useEffect(() => {
        api
            .get("/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                alert("Erro ao buscar albuns");
            });
    }, []);

    const funcCadAcervoUser = (id_disco, nome_disco, nome_artista, foto) => {
        const newAcervoUser = {
            user_id: id_user,
            acervo_id: id_disco,
            nome_disco: nome_disco,
            nome_artista: nome_artista,
            foto: foto,
        };
        api.post("/acervousers", newAcervoUser).then((response) => {
            setAcervoUsers([...acervousers, response.data]);
            alert(`Album cadastrado com sucesso para ${users.nome}`);
        });
    };

    useEffect(() => {
        api
            .get(`/acervousers/${id_user}`)
            .then((response) => {
                setAcervoUsers(response.data);
            })
            .catch((error) => {
                alert(`Erro ao buscar coleção de ${users.nome}`);
            });
    }, []);


    const handleRemove = (acervo_id) => {
        api.delete(`/acervousers/${id_user}/${acervo_id}`).then((res) => {
            alert(`Album retirado da coleção de ${users.nome}`);
        });
    };

    return (
        <>
            <div>
                <div className="catalogo">
                    <h1>Coleção de {users.nome} {users.sobrenome}</h1>
                    <div className="flexcatalogo">
                    {acervousers?.map(
                            ({ acervo_id, nome_disco, nome_artista, foto }, index) => {
                                return (
                                    <div className="card">
                                        <img src={foto} className="card-img-top imgcard" />
                                        <ul className="list-group list-group-flush" key={index}>
                                            <li className="list-group-item">Album: {nome_disco}</li>
                                            <li className="list-group-item">
                                                Artista: {nome_artista}
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                        <i
                                    className="fa fa-trash-o"
                                    onClick={() => handleRemove(acervo_id)}
                                />
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <div className="catalogo">
                    <h1>CATÁLOGO MEU TIMBRE</h1>
                    <div className="flexcatalogo">
                        {products?.map(
                            ({ id_acervo, nome_disco, nome_artista, foto }, index) => {
                                return (
                                    <div className="card">
                                        <img src={foto} className="card-img-top imgcard" />
                                        <ul className="list-group list-group-flush" key={index}>
                                            <li className="list-group-item">Album: {nome_disco}</li>
                                            <li className="list-group-item">
                                                Artista: {nome_artista}
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <a
                                                href="#"
                                                className="card-link btn btn-dark"
                                                onClick={() => funcCadAcervoUser(id_acervo,nome_disco, nome_artista, foto)}
                                            >
                                                Incluir à coleção
                                            </a>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default AcervoUser;
