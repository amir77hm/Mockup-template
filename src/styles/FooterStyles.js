import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#333333',
        color: '#fff',
        fontFamily: 'poppins',
    },
    container: {
        maxWidth: '80rem',
        padding: '3rem 2rem',
        margin: '0 auto',
    },
    content: {
        maxWidth: '30rem',
        height: '10rem',
        textAlign: 'center',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    _copyRight: {
        '& span': {
            display: 'inline-block',
            lineHeight: 1,
            fontSize: 13,

            '&:not(:nth-child(2))': {
                borderBottom: '1px solid #fff',
                cursor: 'pointer',
                '&:hover': {
                    borderBottom: '1px solid transparent',
                    color: '#888'
                }
            },

            '&:nth-child(2)': {
                margin: '0 3px'
            }
        }
    },
    desciption: {
        fontSize: 15
    }
}))

export default useStyles;