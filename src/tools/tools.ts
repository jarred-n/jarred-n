
import { toast } from 'react-toastify';

export const setToast = (text: string) => {
    return toast.error(`💔 ${text}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        className: 'toasting',
    });
};