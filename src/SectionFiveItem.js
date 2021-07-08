import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'poppins',
        '& h2': {
            margin: '1.4rem 0',
            fontSize: 20,
            letterSpacing: '3px'
        }
    },
    profileImage: {
        width: '10rem',
        height: '10rem',
        border: '10px solid #7F51D6',
        borderRadius: "50%",
    },
    copyRight: {
        fontFamily: 'roboto',
        margin: '1rem 0'
    },
    freepic: {
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: '1px solid #000',
    },
    description: {
        width: '60%',
        margin: '3rem auto 2rem auto',
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 2,
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    }
}))

export default function SectionFiveItem({ item }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <p className={classes.description}>{item.description}</p>
            <img className={classes.profileImage} src={item.img} alt='' />
            <h2>{item.name}</h2>
            <p className={classes.copyRight}>Image from <span className={classes.freepic}>Freepic</span></p>
        </div>
    )
}
