import * as Yup from "yup";
import { genders } from "./genre";

export function loginValidationScheme() {
  return Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
}

export function register1ValidationScheme() {
  return Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), ""], "Confirm password does not match"),
  });
}

export function register2ValidationScheme() {
  return Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    birth: Yup.date().required("Birth date required"),
    genre: Yup.string().oneOf(genders, "Genre doesn't match any")
  })
}

export function register3ValidationScheme() {
  return Yup.object().shape({
    phone: Yup.number().required("Phone number is required"),
    Address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  })
}