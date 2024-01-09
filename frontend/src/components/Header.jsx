
import { Link } from "react-router-dom";
import img from "../assets/TEUTIMBRE.png";

function Header() {
    return (
        <>
            <div className="logo">
                <Link to="/">
                    <img src={img} alt="logo" />
                </Link>
            </div>
            <div className="menu">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        EXPLORAR
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to='/historia'>Nossa história</Link></li>
                                        <li>
                                            <Link className="dropdown-item" to='/login'>Gerenciamento</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/catalogo'>CATÁLOGO</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='/Noticias'>NOTÍCIAS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Header;
