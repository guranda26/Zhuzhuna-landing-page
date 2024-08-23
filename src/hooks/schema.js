import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\+?[0-9]\d{1,14}$/, "Phone number is not valid")
    .min(9)
    .max(13),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});
