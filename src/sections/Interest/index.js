import React from 'react';
import { Card } from "../../components";
import css from './Interest.module.css';

class Interest extends React.Component {
    render() {
        return (
            <div className={css.interest}>
                <h1 className="title">Interest</h1>
                <div className={css.interestRow}>
                    <Card className={css.interestCard}>
                        <h2><i className="fa fa-users"/></h2>
                        <h2>Community</h2>
                    </Card>
                    <Card className={css.interestCard}>
                        <h2><i className="fa fa-paint-brush"/></h2>
                        <h2>Art</h2>
                    </Card>
                </div>
                <div className={css.interestRow}>
                    <Card className={css.interestCard}>
                        <h2><i className="fa fa-gamepad"/></h2>
                        <h2>Gaming</h2>
                    </Card>
                    <Card className={css.interestCard}>
                        <h2><i className="fa fa-cutlery"/></h2>
                        <h2>Cooking</h2>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Interest;