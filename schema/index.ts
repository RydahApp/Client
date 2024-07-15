import * as yup from "yup";

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email Field is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .required("Required"),
});

export const otpVerifySchema = yup.object().shape({
  otp_code: yup.string().required("Required"),
});
