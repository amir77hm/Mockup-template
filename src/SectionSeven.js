import React from 'react'
import useStyles from './styles/SectionSevenStyles'

export default function SectionSeven() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h5>FEATURES</h5>
                <h2>Using design to improve product development</h2>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.img}>
                            <i className="fab fa-accessible-icon"></i>
                        </div>
                        <h3 className={classes.title}>
                            Strategy
                        </h3>
                        <p className={classes.description}>
                            Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives
                        </p>
                        <button className={classes.moreBtn}>more</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img}>
                            <i className="fas fa-smoking"></i>
                        </div>
                        <h3 className={classes.title}>
                            Concept
                        </h3>
                        <p className={classes.description}>
                            A business concept is a statement that describes the reach and reason of existence of a given business idea. In other words, it sums up                        </p>
                        <button className={classes.moreBtn}>more</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.img}>
                            <i className="far fa-file-code"></i>
                        </div>
                        <h3 className={classes.title}>
                            Development
                        </h3>
                        <p className={classes.description}>
                            Develop an on-demand app for your delivery business to reach your targeted customers without any interruption.                        </p>
                        <button className={classes.moreBtn}>more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
