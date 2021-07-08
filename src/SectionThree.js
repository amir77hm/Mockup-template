import React from 'react'
import useStyles from "./styles/SectionThreeStyles";

export default function SectionThree() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.leftContent}>
                        <span>we</span>
                        <span>build</span>
                        <span>digital.</span>
                    </div>
                    <div className={classes.rightContent}>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
