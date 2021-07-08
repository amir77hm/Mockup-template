import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1A1A1A',
        color: '#fff',
        position: 'relative',
        zIndex: '0',

        '&:after': {
            content: "''",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%)',
            width: '100%',
            height: '8rem',
            backgroundColor: '#7F51D6',
            zIndex: '-1',

            [theme.breakpoints.down('md')]: {
                height: '5rem',
                top: '53%'
            },
        }
    },
    container: {
        maxWidth: '83rem',
        margin: '0 auto',
        padding: '3rem'
    },
    header: {
        width: '50%',
        fontFamily: 'poppins',

        [theme.breakpoints.down('md')]: {
            width: '60%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },

        '& h2': {
            fontSize: 75,
            position: 'relative',
            paddingBottom: '5px',

            '&:after': {
                position: 'absolute',
                bottom: 0,
                left: 0,
                content: '""',
                width: '4.4rem',
                height: '9px',
                backgroundColor: '#fff'
            },

            [theme.breakpoints.down('xs')]: {
                fontSize: 50,
            },
        },
        '& h6': {
            fontSize: 20,
            fontWeight: '400',
            marginTop: '2rem'
        },
    },
    copyRight: {
        fontFamily: 'roboto',
        margin: '1rem 0'
    },
    freepic: {
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: '1px solid #fff',
    },
    items: {
        height: '40rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '4rem 0 2rem 0',

        [theme.breakpoints.down('md')]: {
            height: '35rem'
        },

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
        },

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: '100%',
        },
    },
    item: {
        fontFamily: 'poppins',
        width: '26%',

        [theme.breakpoints.down('sm')]: {
            width: '28%',
        },

        [theme.breakpoints.down('xs')]: {
            width: '100%',

            '&:not(first-child)': {
                marginTop: '3rem'
            }
        },

        '&:nth-child(1)': {
            alignSelf: 'flex-start'
        },
        '&:nth-child(2)': {
            alignSelf: 'center'
        },

        '&:nth-child(3)': {
            alignSelf: 'flex-end'
        },
    },
    img: {
        height: '21rem',
        alignSelf: 'center',

        [theme.breakpoints.down('md')]: {
            height: '18rem'
        },

        [theme.breakpoints.down('sm')]: {
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '22rem',
        },

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    name: {
        fontSize: 30,
        fontWeight: '400',
        marginTop: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: 27,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 29,
        },
    },
    role: {
        fontSize: 17,
        marginTop: '5px',
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
        },
    },
    social: {
        color: '#7F51D6',
        marginTop: '1rem',
        '&>*': {
            fontSize: 27,

            '&:not(:last-child)': {
                marginRight: '15px',

                [theme.breakpoints.down('sm')]: {
                    marginRight: '10px',
                },
                [theme.breakpoints.down('xs')]: {
                    marginRight: '17px',
                },
            }
        }
    }
}))

export default useStyles;