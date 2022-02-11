import React from 'react';
import Tracker from '../../components/molecules/Tracker';
import css from './Experience.module.css';

class Experience extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: "Frontend Engineer",
                    company: "Enterprise Digital Technology Services",
                    year: "June 2020 - Present"
                },
                {
                    title: "UI Developer",
                    company: "Elevenia",
                    year: "May 2018 - May 2020"
                },
                {
                    title: "Software Engineer",
                    company: "Xdana Investa",
                    year: "February 2018 - May 2018"
                }
            ]
        }
    }
    render() {
        return (
            <div className={css.experience}>
                <h1 className="title">Experience</h1>
                <Tracker data={this.state.data}></Tracker>
            </div>
        )
    }
}

export default Experience;