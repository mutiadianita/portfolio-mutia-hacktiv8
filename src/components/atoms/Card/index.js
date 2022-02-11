import React from 'react';
import css from "./Card.module.css"

class Card extends React.Component {
    render() {
        return (
            <div className={`${css.card} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Card;