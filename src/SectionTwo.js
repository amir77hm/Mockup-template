import React from 'react'
import useStyles from "./styles/SectionTwoStyles";

export default function SectionTwo() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.leftContent}>
                        <span>Make</span>
                        <span>things</span>
                        <span>you love.</span>
                    </div>
                    <div className={classes.rightContent}>
                        <div className={classes.upperPart}>
                            <h2>Start running today</h2>
                            <button>download now</button>
                            <p>Free 30-day trial, macOS 10.11+</p>
                        </div>
                        <div className={classes.lowerPart}></div>
                    </div>
                </div>
                <p className={classes.copyRight}>Image from <span className={classes.freepic}>Freepic</span></p>
            </div>
        </div>
    )
}
