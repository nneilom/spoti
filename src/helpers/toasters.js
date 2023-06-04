import { toast } from "react-toastify";

export const successToaster = (message) =>
  toast.success(message, {
    position: "top-right",
  });
