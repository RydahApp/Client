import * as yup from "yup";

export const authFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .required("Required"),
});

export const otpVerifySchema = yup.object().shape({
  otp_code: yup.string().required("Required"),
});

export const forgetSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
});

export const personalFormSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  username: yup.string().required("Required"),
  mobile_number: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  location: yup.string().required("Required"),
});
