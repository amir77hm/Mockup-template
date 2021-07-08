import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        maxWidth: '85rem',
        margin: '0 auto',
        padding: '.5rem 3rem',

    },
    logoImg: {
        width: '4.4rem',
        height: '2rem',
        paddingLeft: '.4rem'
    },
    hambergurIcon: {
        width: 55,
        height: 55,
        padding: '.4rem'
    },
}));

export default useStyles;