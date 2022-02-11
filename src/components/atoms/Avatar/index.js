import React from 'react';
import css from "./Avatar.module.css"

class Avatar extends React.Component {
    render() {
        return (
            <img src={this.props.image} alt={this.props.alt} className={css.avatar}/>
        )
    }
}

export default Avatar;