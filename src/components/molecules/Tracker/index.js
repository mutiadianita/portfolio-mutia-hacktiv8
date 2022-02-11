import React, { Component } from 'react';
import css from './Tracker.module.css'

class Tracker extends Component {
    render() {
        return (
            <div className={css.tracker}>
                {this.props.data?.map((obj, i) => {
                    return (
                        <div key={i} className={css.track}>

                            <div className={css.trackLabel}>
                                <h3 style={{marginRight:"24px", width:"173px"}}>{obj.year}</h3>
                                <span className={css.trackBadge}>
                                    <i className="fa fa-circle"/>
                                </span>
                                <h3>{obj.title}</h3>
                            </div>
                            <div className={css.trackDivider}/>
                            <div className={css.trackSubtitle}>
                                <h4>{obj.company}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tracker;
