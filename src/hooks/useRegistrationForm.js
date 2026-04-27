import { useState, useCallback } from "react";
import { validateField } from "../utils/validation";
import { getPasswordStrength } from "../utils/passwordStrength";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

const INITIAL_ERRORS = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: "",
};

/**
 * Encapsulates all form state, validation, and submit logic
 * for the registration form.
 */
export function useRegistrationForm() {
  const [formData, setFormData]     = useState(INITIAL_FORM);
  const [errors, setErrors]         = useState(INITIAL_ERRORS);
  const [showPassword, setShowPassword]               = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [shake, setShake]           = useState(false);

  const passwordStrength = getPasswordStrength(formData.password);

  // Real-time validation on change
  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === "checkbox" ? checked : value;
      const updatedForm = { ...formData, [name]: fieldValue };

      setFormData(updatedForm);

      // Re-validate confirmPassword whenever password changes
      if (name === "password" && formData.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          password:        validateField("password", value, updatedForm),
          confirmPassword: validateField("confirmPassword", formData.confirmPassword, updatedForm),
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, fieldValue, updatedForm),
        }));
      }
    },
    [formData]
  );

  // Full validation on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullName:        validateField("fullName",        formData.fullName,        formData),
      email:           validateField("email",           formData.email,           formData),
      password:        validateField("password",        formData.password,        formData),
      confirmPassword: validateField("confirmPassword", formData.confirmPassword, formData),
      agreeTerms:      validateField("agreeTerms",      formData.agreeTerms,      formData),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
  };

  const isFormEmpty =
    !formData.fullName ||
    !formData.email    ||
    !formData.password ||
    !formData.confirmPassword ||
    !formData.agreeTerms;

  const hasAnyError = Object.values(errors).some((msg) => msg !== "");
  const isDisabled  = isFormEmpty || hasAnyError;

  return {
    formData,
    errors,
    showPassword,
    showConfirmPassword,
    submitted,
    shake,
    passwordStrength,
    isDisabled,
    handleChange,
    handleSubmit,
    resetForm,
    togglePassword:        () => setShowPassword((v) => !v),
    toggleConfirmPassword: () => setShowConfirmPassword((v) => !v),
  };
}
