import React from 'react'
import useStyles from './styles/FooterStyles'

export default function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <p className={classes.desciption}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <p className={classes._copyRight}>
                        <span>Website Templates</span>
                        <span> created with </span>
                        <span>Website Builder Software</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}
