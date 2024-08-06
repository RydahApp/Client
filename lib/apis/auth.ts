import {
  authFormValueType,
  forgetFormValueType,
  otpFormValueType,
  personalFormValueType,
} from "@/types";
import { Axios } from "../config";
import request from "../request";

// Function to register a user
export const registerUser = async (payload: authFormValueType) => {
  try {
    const response = await Axios.post(request.auth.register, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get otp verify
export const emailOtpVerify = async (query: otpFormValueType | undefined) => {
  try {
    const response = await Axios.get(request.auth.verifyemailotp, {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get otp verify
export const resendEmailOtpVerify = async (
  query: forgetFormValueType | undefined
) => {
  try {
    const response = await Axios.get(request.auth.resendemailotp, {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const loginUser = async (payload: authFormValueType) => {
  try {
    const response = await Axios.post(request.auth.login, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to create a user profile
export const createUserProfile = async (payload: personalFormValueType) => {
  try {
    const response = await Axios.post(request.auth.create_user_profile, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
