import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const notify = (msg) => toast(msg);

const Toast = ({ showToast, msg }) => {
  useEffect(() => {
    if (showToast) {
      notify(msg);
    }
  }, [showToast]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
  );
};

export default Toast;
