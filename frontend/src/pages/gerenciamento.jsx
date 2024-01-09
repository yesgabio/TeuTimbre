import api from "../service/api";
import { useEffect, useState } from "react";

function Gerenciamento() {
  const [products, setProducts] = useState([]);
  const [dataEdit, setDataEdit] = useState(false);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        alert("Erro ao buscar produtos");
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const newProduct = {
      nome_disco: formData.get("nome_disco"),
      nome_artista: formData.get("nome_artista"),
      foto: formData.get("foto"),
    };
    api.post("/products", newProduct).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
      alert("Album cadastrado com sucesso!");
    });
  };

  const handleRemove = (id_acervo) => {
    console.log(id_acervo);
    api.delete(`/products/${id_acervo}`).then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Album deletado com sucesso!");
    });
  };

  const handleFormEdit = (event, id_acervo) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const editProduct = {
      nome_disco: formData.get("nome_disco"),
      nome_artista: formData.get("nome_artista"),
      foto: formData.get("foto"),
    };
    api.put(`/products/${id_acervo}`, editProduct).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
      alert("Album alterado com sucesso!");
    });
  }

  return (
    <>
      <div className="gerenciamento">
        <div className="formcad novosalbuns">
          <h3>CADASTRO DE NOVOS ALBUNS</h3>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="form-floating col">
              <input type="text" className="form-control" id="floatingPassword" placeholder="nome_disco" name="nome_disco" />
              <label htmlFor="nome_disco">Album</label>
            </div>
            <div className="form-floating col">
              <input type="text" className="form-control" id="floatingPassword" placeholder="nome_artista" name="nome_artista" />
              <label htmlFor="nome_artista">Artista</label>
            </div>
            <div className="form-floating col">
              <input type="text" className="form-control" id="floatingPassword" placeholder="foto" name="foto" />
              <label htmlFor="foto">Foto</label>
            </div>
            <button type="submit" className="btn btn-dark">CADASTRAR ALBUM</button>
          </form>
        </div>
        <div className="formcad">
          <h3>ALTERAÇÃO OU EXCLUSÃO DE ALBUM</h3>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Album</th>
                  <th>Artista</th>
                  <th>Alterar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {products.map(({ id_acervo, nome_disco, nome_artista, foto }, index) => (
                  <tr key={index}>
                    <td className="tdimg">
                      <img src={foto} />
                    </td>
                    <td>{nome_disco}</td>
                    <td>{nome_artista}</td>
                    <td>
                      <i className="fa fa-exchange" onClick={() => [setDataEdit(true)]} />
                      {dataEdit ? (
                        <>
                          <form onSubmit={(e) => handleFormEdit(e, id_acervo)} className=" formaltera">
                            <div className="form-floating col">
                              <input type="text" className="form-control" id="floatingPassword" placeholder="nome_disco" name="nome_disco" />
                              <label htmlFor="nome_disco">Album: {nome_disco}</label>
                            </div>
                            <div className="form-floating col">
                              <input type="text" className="form-control" id="floatingPassword" placeholder="nome_artista" name="nome_artista" />
                              <label htmlFor="nome_artista">Artista: {nome_artista}</label>
                            </div>
                            <div className="form-floating col">
                              <input type="text" className="form-control" id="floatingPassword" placeholder="foto" name="fotobanco" value={foto} />
                              <label htmlFor="fotobanco">Imagem Atual</label>
                            </div>
                            <div className="form-floating col">
                              <input type="text" className="form-control" id="floatingPassword" placeholder="foto" name="foto" />
                              <label htmlFor="foto">Nova Imagem</label>
                            </div>
                            <button type="submit" className="btn btn-dark">ALTERAR ALBUM</button>
                          </form>
                        </>
                      ) : null}
                    </td>
                    <td>
                      <i className="fa fa-trash-o" onClick={() => handleRemove(id_acervo)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gerenciamento;
