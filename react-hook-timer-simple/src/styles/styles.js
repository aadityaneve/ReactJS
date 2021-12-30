import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    },
    container: {
        padding: 1,
        backgroundColor: '#202124',
    },
    textFieldContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#202124',
    },
    formControl: {
        backgroundColor: '#5F6368',
    },
    outlinedInput: {
        color: 'white',
        fontSize: '55px',
        backgroundColor: 'lightgrey',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    coralButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        cursor: 'pointer',
    },
    oceanButton: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        cursor: 'pointer',
    },
});

export default useStyles;
