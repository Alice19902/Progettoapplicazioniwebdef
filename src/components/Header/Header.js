import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
    const {logo, navItems} = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            to={item.url}>
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>

            <Navbar expand="md">
                <div className="container">

                    <RouterLink to="/Progettoapplicazioniwebdef">
                        <img className={style.logo} src={logo} alt="LogoRickandMorty"/>
                    </RouterLink>

                    <NavbarToggler onClick={toggle}/>

                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="mr-auto" navbar>

                            {itemList}

                        </Nav>

                    </Collapse>

                </div>

            </Navbar>

        </div>

    );
}

export default Header;

