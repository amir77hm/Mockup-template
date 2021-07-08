import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '85%',
        margin: '4rem auto'
    },
    container: {
        maxWidth: '85rem',
        margin: '0 auto',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        height: '45rem',
        [theme.breakpoints.down('md')]: {
            height: '40rem'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: 'auto'
        },
    },
    leftContent: {
        flex: '50%',
        padding: '2rem',
        backgroundColor: '#7F51D6',
        margin: '0 1rem',
        [theme.breakpoints.down('sm')]: {
            margin: '.5rem 1rem 2.5rem 1rem'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 1rem'
        },

        '& span': {
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: 90,
            lineHeight: 1.1,
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
                fontSize: 110
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 40,
                lineHeight: 1.3,
                '&:nth-child(1)': {
                    display: 'inline',
                    paddingRight: '7px'
                },
                '&:nth-child(2)': {
                    display: 'inline'
                },
            },
        },
    },
    rightContent: {
        flex: '50%',
        margin: '0 1rem',
    },
    upperPart: {
        width: '80%',
        height: '13rem',
        fontFamily: 'Poppins',
        backgroundColor: '#D9DBDD',
        margin: '2rem 0',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        '& h2': {
            fontWeight: '700',
            fontSize: '2rem'
        },
        '& button': {
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: '1.5rem',
            backgroundColor: '#7F51D6',
            color: '#fff',
            padding: '.7rem 1.4rem',
            fontWeight: '700',
            letterSpacing: '4px',
            marginRight: 'auto',
            cursor: 'pointer'
        },
        '& p': {},
    },
    lowerPart: {
        width: '100%',
        height: '28rem',
        background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7090ef2012fe564b8599f5c3/fgggg.jpg") center center/cover',
        [theme.breakpoints.down('md')]: {
            height: '23rem'
        },
    },
    copyRight: {
        fontFamily: 'roboto',
        margin: '1.5rem 0',
        paddingLeft: '1.2rem'
    },
    freepic: {
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: '1px solid red',
        color: 'red',
    },
}))

export default useStyles