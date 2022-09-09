import { SHOW_SNACKBAR } from './types';
//Me muestra snackbar cuando agrego, edito o elimino un employee
export const showSnackBar = (variant, message) => dispatch => {
    dispatch({
        type: SHOW_SNACKBAR,
        payload: { variant, message }
    });
};