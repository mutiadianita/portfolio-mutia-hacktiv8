import React from 'react';
import { Badge, Card } from "../../components";
import css from './About.module.css';

class About extends React.Component {
    render() {
        return (
            <>
                <div className={css.about}>
                    <h1 className="title">About</h1>
                    <Card>
                        <p className={css.aboutText}>
                            Hello, my name is Mutia Ayu Dianita. I'm working as Frontend Engineer. Skilled in UI Development and Frontend Engineering using Javascript with framework ReactJS. Have a strong fundamental in HTML, CSS, SASS, and Javascript.
                        </p>
                        <p className={css.aboutText}>
                            I started my career as a software developer at PT Xdana Investa Indonesia for 3 months, after that I continued to work as a UI developer for 2 years at PT XL Planet (Elevenia). Currently, I am working as a frontend engineer at PT Enterprise Digital Technology Solution (EDTS).
                        </p>
                    </Card>
                </div>

                <div className={css.aboutContact}>
                    <Badge>
                        <i className="fa fa-linkedin"></i>
                    </Badge>
                    <a href="https://www.linkedin.com/in/mutiadianita/">linkedin.com/in/mutiadianita</a>
                </div>
                <div className={css.aboutContact}>
                    <Badge>
                        <i className="fa fa-envelope"></i>
                    </Badge>
                    <a href="mailto:mutiaayu.dianita@gmail.com">mutiaayu.dianita@gmail.com</a>
                </div>
            </>
        )
    }
}

export default About;