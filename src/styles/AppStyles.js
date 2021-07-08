import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*': {
            padding: '0',
            margin: '0',
            boxSizing: 'border-box',
        }
    },
    app: {
    },
}));

export default useStyles;