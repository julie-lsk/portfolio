import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../utils/assets/logo_blanc.svg";
import "./header.scss";


function Header()
{
    return (
        <header>

            <Link to="/">
                <img src={logoWhite} alt="Logo de Julie LAUSECKER" />
            </Link>

            <NavLink to="/">Accueil</NavLink>

            <NavLink to="/"> {/* FIXME: */}
                À propos
            </NavLink>

            <NavLink to="/"> {/* FIXME: */}
                Portoflio
            </NavLink>

            <NavLink to="/"> {/* FIXME: */}
                Compétences
            </NavLink>

            <NavLink to="/"> {/* FIXME: */}
                Contact
            </NavLink>

        </header>
    )
}

export default Header