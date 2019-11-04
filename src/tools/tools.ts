
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

export const noop = () => {};

// 2018-11-11T07:53:15.403Z => 2018-11-11 15:53:15
export const formatJSONDate = (jsonDate: string): string => {
    return new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '');
  };
  