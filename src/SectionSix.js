import React from 'react'
import useStyles from "./styles/SectionSixStyles";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function SectionSix() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Our Team</h2>
                    <h6>Sample text. Click to select the text box. Click again or double click to start editing the text.</h6>
                    <p className={classes.copyRight}>Image from <span className={classes.freepic}>Freepic</span></p>
                </div>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <div className={classes.img}>
                            <img
                                alt=''
                                src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg'
                            />
                        </div>
                        <p className={classes.name}>Alex Grinfield</p>
                        <p className={classes.role}>programming guru</p>
                        <div className={classes.social}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img}>
                            <img
                                alt=''
                                src='//images01.nicepage.com/c461c07a441a5d220e8feb1a/bb4a3324cba15018a0c8e5ad/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg'
                            />
                        </div>
                        <p className={classes.name}>Ann Richmond</p>
                        <p className={classes.role}>creative leader</p>
                        <div className={classes.social}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img}>
                            <img
                                alt=''
                                src='//images01.nicepage.com/c461c07a441a5d220e8feb1a/2d3e149e710d5030b9e36a55/ddddddd.jpg'
                            />
                        </div>
                        <p className={classes.name}>Jeffrey Brown</p>
                        <p className={classes.role}>manager</p>
                        <div className={classes.social}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
