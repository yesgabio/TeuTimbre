import api from "../service/api";
import { useEffect, useState } from "react";

function Catalogo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products")
            .then((response) => {
                console.log(response);
                setProducts(response.data);
            })
            .catch((error) => {
                alert("Erro ao buscar albuns");
            });
    }, []);


    return (
        <>
            <div className="catalogo">
                <h1>CATÁLOGO DE ALBUNS</h1>
                <div className="flexcatalogo">
                    {products?.map(({ nome_disco, nome_artista, foto }, index) => {
                        return (
                            <div className="card">
                                <img src={foto} className="card-img-top imgcard" />
                                <ul className="list-group list-group-flush" key={index}>
                                    <li class="list-group-item">Album: {nome_disco}</li>
                                    <li class="list-group-item">Artista: {nome_artista}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );

}

export default Catalogo;
