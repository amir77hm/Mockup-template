import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1A1A1A',
        padding: '4rem 0'
    },
    container: {
        maxWidth: '85rem',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        paddingBottom: '26rem',
        zIndex: '0',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '3rem'
        },

        '&:after': {
            position: 'absolute',
            top: 0,
            left: '15rem',
            width: '23rem',
            height: '92%',
            content: '""',
            backgroundColor: '#7F51D6',
            zIndex: '-1',

            [theme.breakpoints.down('sm')]: {
                left: '7rem'
            },
            [theme.breakpoints.down('xs')]: {
                left: '50%',
                transform: 'translateX(-50%)',
                height: '100%',
                width: '17rem',
            },
        }
    },
    items: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridTemplateRows: 'repeat(2,22rem)',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            gridTemplateRows: 'repeat(2,19rem)'
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2,48%)',
            gridTemplateRows: 'repeat(3,20rem)'
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(1,95%)',
            gridTemplateRows: 'repeat(6,21rem)'
        },
    },
    item: {
        width: '95%',
        height: '20.5rem',
        cursor: 'pointer',
        transition: 'all .3s',
        [theme.breakpoints.down('md')]: {
            height: '18rem',
        },
        [theme.breakpoints.down('sm')]: {
            height: '19rem',
        },

        '&:hover': {
            filter: 'brightness(70%)'
        },

        '&:nth-child(1)': {
            background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b534a78ec5a150be9df34412/businessman-checking-stock-market-online_53876-11970.jpg") center center/cover'
        },
        '&:nth-child(2)': {
            background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8b0c6018708c54bfb36443dd/music-player-app-interface-set_23-2148547854.jpg") center center/cover'
        },
        '&:nth-child(3)': {
            background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c9d97524f40f5dc7b655fec5/cxcc.jpg") center center/cover'
        },
        '&:nth-child(4)': {
            background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/eb8edf7f9d0b56989a576454/ccc.jpg?version=") center center/cover'
        },
        '&:nth-child(5)': {
            background: 'url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/714eb9919289545a9278606f/vcv.jpg") center center/cover'
        },
        '&:nth-child(6)': {
            background: 'url("https://images03.nicepage.com/c461c07a441a5d220e8feb1a/7b1ef08a7dcc50639331abd3/black-screen-smartphone-mockup-design_53876-65977.jpg?version=") center center/cover'
        },
    },
    developmentBox: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '35rem',
        maxWidth: '80%',
        margin: '0 3rem',
        fontFamily: 'poppins',
        borderRadius: '2px',
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            margin: '1rem auto',
            maxWidth: '90%',
            position: 'relative'
        },
        "& h2": {
            fontSize: 40,
            fontWeight: '700',
            marginBottom: '2rem',
            lineHeight: 1.1,
            [theme.breakpoints.down('xs')]: {
                fontSize: 30
            },
        },
    },
    contentBox: {
        fontSize: 18
    },
    copyRight: {
        fontFamily: 'roboto',
        margin: '2rem 0'
    },
    freepic: {
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: '3px solid #000',
    },
    btn: {
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '1.5rem',
        backgroundColor: '#803BEC',
        color: '#fff',
        padding: '.8rem 1.8rem',
        fontWeight: '700',
        letterSpacing: '1px',
        marginRight: 'auto',
        fontSize: 15
    },
}))

export default useStyles;
