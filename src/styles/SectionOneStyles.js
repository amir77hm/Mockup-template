import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    '@global': {
        'span': {
            display: 'block',
        },
    },
    root: {
        height: '90vh',
        display: 'grid',
        gridTemplateRows: 'repeat(1,1fr)',
        gridTemplateColumns: 'repeat(2,1fr)',
        [theme.breakpoints.down('xs')]: {
            gridTemplateRows: 'repeat(2,1fr)',
            gridTemplateColumns: 'repeat(1,1fr)',
            height: '115vh'
        }
    },
    content: {
        backgroundImage: 'url(https://images01.nicepage.com/c461c07a441a5d220e8feb1a/2f1cad5f7ae9506e8d0e2aad/fggggh.jpg)',
        height: '100%',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        maxWidth: '42rem',
        marginLeft: 'auto',
        paddingLeft: '4rem'
    },
    image: {
        backgroundImage: 'url(https://images01.nicepage.com/c461c07a441a5d220e8feb1a/02f4f585fde750d19378a9e1/fggg-min.jpg)',
        background: 'center center/cover',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'left top',
            backgroundSize: 'cover',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'center center',
        },
    },
    title: {
        fontFamily: 'roboto',
        borderBottom: '12px solid #803BEC',
        alignSelf: 'flex-start',
    },
    titleHeading: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        lineHeight: 1,
        fontSize: 70,
        paddingRight: '1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: 55,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 36,
            paddingRight: '0'
        },
    },
    copyRight: {
        fontFamily: 'roboto',
        margin: '1rem 0'
    },
    freepic: {
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: '3px solid #803BEC',
    },
    list: {
        textAlign: 'right',
        fontFamily: 'roboto',
        fontWeight: 'bold',
        marginRight: '2rem',
        listStyle: 'none',
        '& li:not(:last-child)': {
            marginBottom: '1rem'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left'
        },
    }
}))

export default useStyles