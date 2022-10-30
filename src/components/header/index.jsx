import React from "react";
import './style.css'
import logo from '../../assets/codigo.png'
import {Link} from 'react-router-dom'

function Header () {

    return (
        <header>
            <div className="leftSide"><img src={logo} alt="logo programação"  /></div>
            <div className="rigthSide">
                <Link to='/'>HOME</Link>
                <Link to='/sobre'>SOBRE</Link>
                <Link to='/projetos'>PROJETOS</Link>

                
            </div>

        </header>
    )

}
export default Header