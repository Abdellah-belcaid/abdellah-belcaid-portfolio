import { toast } from "react-toastify";

export const notifySuccess = () => {
  toast.success("Message has been sent successfully!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const notifyError = () => {
  toast.error("An error was occurred ,Try later !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
