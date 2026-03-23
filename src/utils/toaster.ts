import { toast, ToastOptions } from 'react-toastify';
import { isClientSideComponent } from './general';
import { ToastType } from '@/types/components';

export const showToast = ({ text, type, position = "bottom-right" }: ToastType) => {
  if (!isClientSideComponent()) {
    return;
  }

  const formattedText = `> ${text}`;

  const toastDefaultSetting: ToastOptions = {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    toastId: text, 
  };

  if (type !== 'default' && toast[type]) {
    toast[type](formattedText, toastDefaultSetting);
  } else {
    toast(formattedText, toastDefaultSetting);
  }
};
