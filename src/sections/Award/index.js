import React from 'react';
import Tracker from '../../components/molecules/Tracker';
import css from './Award.module.css';

class Award extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: "Mentoring Awards: Best Teamwork",
                    company: "Facebook Developer Circle Jakarta",
                    year: "2019"
                },
                {
                    title: "1st Winner Hackathon TIK",
                    company: "Politeknik Negeri Jakarta",
                    year: "2019"
                },
                {
                    title: "2nd Runner Up Hackathon",
                    company: "Universitas Multimedia Nusantara",
                    year: "2016"
                },
            ]
        }
    }
    render() {
        return (
            <div className={css.award}>
                <h1 className="title">Award</h1>
                <Tracker data={this.state.data}></Tracker>
            </div>
        )
    }
}

export default Award;