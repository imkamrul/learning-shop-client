import { Theme, ToastOptions, toast } from "react-toastify";

const notify = (type: string, message: string, options = {}) => {
  try {
    if (!type || !message) {
      return console.log("Error For Notify: ----------- Invalid Input");
    }

    let optionsObject: ToastOptions<{}> = {
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored" as Theme,
      ...options,
    };

    switch (type) {
      case "success":
        toast.success(message, optionsObject);
        break;
      case "info":
        toast.info(message, optionsObject);
        break;
      case "warning":
        toast.warning(message, optionsObject);
        break;
      case "error":
        toast.error(message, optionsObject);
        break;

      default:
        toast(message, optionsObject);
        break;
    }
  } catch (error) {
    console.log("Error For Notify: -----------", error);
  }
};

export default notify;
