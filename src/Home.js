import React from 'react'
import useStyles from './styles/AppStyles'

export default function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            {props.children}
        </div>
    )
}
