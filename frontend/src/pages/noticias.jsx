
function Noticias() {
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
                                    <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." id="img-bottom" /></a>
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
            </div>
        </>
    )
}
export default Noticias;