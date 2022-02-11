import React from 'react';
import { Avatar, Button } from "../../components";
import potrait from "../../assets/images/Mutia.jpeg";
import css from './Home.module.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className={css.home}>
                <Avatar image={potrait} alt="image" />
                <div className="title">Hi, I'm Mutia Ayu Dianita</div>
                <div className={css.homeText}>Frontend Engineer</div>
                <Link to="/about"><Button className="mt-3">Click here to know about me!</Button></Link>
            </div>
        )
    }
}

export default Home;