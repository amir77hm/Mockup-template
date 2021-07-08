import React from 'react'
import useStyles from './styles/SectionEightStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function SectionEight() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2 className={classes.header}>Get in touch</h2>
                <form className={classes.form} autoComplete="off">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="outlined-basic"
                                label="enter your name"
                                variant="outlined"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="outlined-basic"
                                label="enter your email"
                                variant="outlined"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                id="time"
                                type="TextArea"
                                variant="outlined"
                                className={`${classes.input} ${classes.textArea}`}
                                aria-label="empty textarea"
                                placeholder="enter your message"
                            />
                        </Grid>
                    </Grid>
                    <button className={classes.submitBtn}>submit</button>
                </form>
            </div>
        </div>
    )
}
