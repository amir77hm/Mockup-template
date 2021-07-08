import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7F51D6'
    },
    container: {
        maxWidth: '80rem',
        padding: '4rem 2rem',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'poppins',
        color: '#fff',

        '& h5': {
            fontSize: 26,
            fontWeight: '400',
            letterSpacing: '2px'
        },
        '& h2': {
            fontSize: 70,
            fontWeight: '700',
            letterSpacing: '2px',
            lineHeight: 1.1,
            marginTop: '5px',
            [theme.breakpoints.down('md')]: {
                fontSize: 65,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 50,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 30,
            },
        },
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        justifyContent: 'center',
        gridGap: '2rem',
        marginTop: '3.5rem',

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2,1fr)',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(1,1fr)',
        },
    },
    card: {
        backgroundColor: '#8E65DB',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem 1rem',
        width: '100%',
        minHeight: '25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        margin: '0 auto',
        marginBottom: '1rem',
        '& i': {
            textAlign: 'center',
            fontSize: 50
        }
    },
    title: {
        fontSize: 25,

    },
    description: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 1.7
    },
    moreBtn: {
        backgroundColor: 'transparent',
        color: '#fff',
        border: 'none',
        textTransform: 'upperCase',
        fontSize: 17,
        borderBottom: '2px solid #fff',
        paddingBottom: '2px',
        cursor: 'pointer',
        '&:hover': {
            borderBottomColor: '#000'
        }
    },
}))

export default useStyles;