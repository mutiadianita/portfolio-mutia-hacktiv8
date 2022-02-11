import React from 'react';
import { Card } from "../../components";
import css from './Skills.module.css';

class Skills extends React.Component {
    render() {
        return (
            <div className={css.skills}>
                <h1 className="title">Skills</h1>
                <div className={css.skillsRow}>
                    <Card className={css.skillsCard}>
                        <h2>HTML</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>CSS</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>Javascript</h2>
                    </Card>
                </div>
                <div className={css.skillsRow}>
                    <Card className={css.skillsCard}>
                        <h2>Bootstrap</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>Less</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>Sass</h2>
                    </Card>
                </div>
                <div className={css.skillsRow}>
                    <Card className={css.skillsCard}>
                        <h2>Git</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>JQuery</h2>
                    </Card>
                    <Card className={css.skillsCard}>
                        <h2>ReactJS</h2>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Skills;