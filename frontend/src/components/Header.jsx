import { NavLink } from "react-router-dom"
import "../style/components/header.css"
import logo from "../assets/argentBankLogo.png"

function Header() {
    return (
        <header>
            <nav className="nav">
                <NavLink to="/">
                    <img src={logo} alt="ArgentBank logo" className="logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <NavLink to="/login" style={({isActive}) => ({color: isActive ? "#42b983" : "#2c3e50"})}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </nav>
        </header>
    )
}

export default Header