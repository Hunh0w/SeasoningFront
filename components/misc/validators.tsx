import * as Yup from "yup";

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
