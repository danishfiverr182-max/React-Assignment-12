/**
 * Validates a single form field.
 * @param {string} name       - Field name key
 * @param {*}      value      - Current field value
 * @param {object} formData   - Full form state (needed for cross-field checks)
 * @returns {string}          - Error message, or "" if valid
 */
export function validateField(name, value, formData) {
  switch (name) {
    case "fullName":
      if (!value.trim())            return "Full name is required";
      if (value.trim().length < 3)  return "Name must be at least 3 characters";
      return "";

    case "email":
      if (!value.trim())                               return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))  return "Enter a valid email address";
      return "";

    case "password":
      if (!value)            return "Password is required";
      if (value.length < 6)  return "Password must be at least 6 characters";
      return "";

    case "confirmPassword":
      if (!value)                          return "Please confirm your password";
      if (value !== formData.password)     return "Passwords do not match";
      return "";

    case "agreeTerms":
      if (!value)  return "You must accept the terms to continue";
      return "";

    default:
      return "";
  }
}
