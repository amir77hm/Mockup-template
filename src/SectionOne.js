import React from 'react'
import useStyles from './styles/SectionOneStyles'

export default function SectionOne() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1 className={classes.titleHeading}>
                            <span>Mobil​e</span>
                            <span>application</span>
                            <span>development</span>
                        </h1>
                        <p className={classes.copyRight}>Image from <span className={classes.freepic}>Freepic</span></p>
                    </div>
                    <ul className={classes.list}>
                        <li>DEVELOPMENT</li>
                        <li>TECH TRENDS</li>
                        <li>LATEST NEWS</li>
                        <li>ABOUT US</li>
                    </ul>
                </div>
            </div>
            <div className={classes.image}></div>
        </div>
    )
}