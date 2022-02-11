import React from 'react';
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className={css.navbar}>
                <ul className={css.navbarNav}>
                    {this.props.data?.map((obj, i) => {
                        return (
                            <li>
                                <Link to={obj.link} className={css.navbarLink}>
                                    {obj.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;