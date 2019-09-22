import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header_area" style={{'backgroundColor': 'Black'}}>
                    <div className="top_menu">
                        <div className="container">
                            <div className="top_inner">
                                <div className="float-left">
                                    <a href="https://www.facebook.com/PauloDaLuzz">Visite-nos</a>
                                </div>
                                <div className="float-right">
                                    <ul className="list header_socila">
                                        <li><a href="https://www.facebook.com/StarWars.br/"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/starwars"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.starwars.com/"><i className="fa fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_menu" id="mainNav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">

                                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /><img src="img/logo-2.png" alt="" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active">
                                            <Link to="/home" className="nav-link">Home</Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link to="/pessoas" className="nav-link">Pessoas</Link>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="paginas" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Paginas</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><Link to="/filmes" className="nav-link">filmes</Link></li>
                                                <li className="nav-item"><Link to="/planetas" className="nav-link">Planetas</Link></li>
                                                <li className="nav-item"><Link to="/species" className="nav-link">Espécies</Link></li>
                                                <li className="nav-item"><Link to="/starships" className="nav-link">Naves</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                                        <li className="nav-item"><Link to="/sobre" className="nav-link">Sobre</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}
