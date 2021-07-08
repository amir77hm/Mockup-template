import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1A1A1A',
        color: '#fff',
        fontFamily: 'poppins',
        padding: '4rem 0'
    },
    container: {
        maxWidth: '83rem',
        margin: '0 auto',
        textAlign: 'center',
    },
    header: {
        fontSize: 60,
        paddingBottom: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
        }
    },
    form: {
        width: '70%',
        margin: '0 auto'
    },
    textArea: {
        maxWidth: '100%',
        minWidth: '100%',
        minHeight: '5rem',
        color: '#fff',
        padding: '10px',
        fontSize: 14,
        fontFamily: 'poppins',
        transition: 'all 100ms',
        outline: 'none',

    },
    input: {
        backgroundColor: '#333333',
        width: '100%',

        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#777"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#777"
        },
        "& .MuiOutlinedInput-input": {
            color: "#fff"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#fff"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#fff"
        },
        "& .MuiInputLabel-outlined": {
            color: "#666"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#fff"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#fff"
        }
    },
    submitBtn: {
        backgroundColor: '#7F51D6',
        border: 'none',
        borderRadius: '2.5rem',
        display: 'inline-block',
        color: '#fff',
        padding: '.7rem 4rem',
        textTransform: 'uppercase',
        fontFamily: 'poppins',
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: '2px',
        cursor: 'pointer',
        marginTop: '2rem',
        transition: 'all 100ms',
        '&:hover': {
            backgroundColor: "#8E65DB"
        }
    }


}))

export default useStyles;