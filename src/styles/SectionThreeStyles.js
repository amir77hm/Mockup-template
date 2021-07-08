import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7F51D6',
    },
    container: {
        maxWidth: '85rem',
        padding: '8rem 5rem 6rem 5rem',
        margin: '0 auto'
    },
    content: {
        color: '#fff',
        fontFamily: 'poppins',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    leftContent: {
        flex: '50%',
        fontWeight: '700',
        fontSize: 130,
        lineHeight: 1.1,
        [theme.breakpoints.down('md')]: {
            fontSize: 100
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 70
        },
    },
    rightContent: {
        flex: '20%',
        alignSelf: 'flex-end',
        fontSize: 17,
        [theme.breakpoints.down('md')]: {
            flex: '35%',
            marginTop: '3rem'
        }
    },
}))

export default useStyles