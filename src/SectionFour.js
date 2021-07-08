import React from 'react'
import useStyles from './styles/SectionFourStyles'

export default function SectionFour() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.items}>
                    <div className={classes.item} />
                    <div className={classes.item} />
                    <div className={classes.item} />
                    <div className={classes.item} />
                    <div className={classes.item} />
                    <div className={classes.item} />
                </div>
                <div className={classes.developmentBox}>
                    <h2>
                        <span>Mobile App</span>
                        <span>Development</span>
                    </h2>
                    <p className={classes.contentBox}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className={classes.copyRight}>Image from <span className={classes.freepic}>Freepic</span></p>
                    <button className={classes.btn}>learn more</button>
                </div>
            </div>
        </div>
    )
}
