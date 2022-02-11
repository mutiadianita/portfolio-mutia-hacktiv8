import React from 'react';
import css from "./Badge.module.css"

class Badge extends React.Component {
    render() {
        return (
            <span className={css.badge}>{this.props.children}</span>
        )
    }
}

export default Badge;