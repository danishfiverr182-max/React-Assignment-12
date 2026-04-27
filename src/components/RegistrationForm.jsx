import { useRegistrationForm } from "../hooks/useRegistrationForm";
import FormField from "./FormField";
import EyeIcon from "./EyeIcon";
import PasswordStrengthBar from "./PasswordStrengthBar";
import SuccessScreen from "./SuccessScreen";

// ─── Input border helper ───────────────────────────────────────────────────
function inputStyle(error, value) {
  let borderColor = "rgba(255, 255, 255, 0.1)";
  if (error)      borderColor = "#fc5c65";
  else if (value) borderColor = "rgba(99, 202, 183, 0.6)";

  return {
    ...styles.input,
    border: `1.5px solid ${borderColor}`,
    boxShadow: error
      ? "0 0 0 3px rgba(252, 92, 101, 0.12)"
      : value
      ? "0 0 0 3px rgba(99, 202, 183, 0.08)"
      : "none",
  };
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function RegistrationForm() {
  const {
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
    togglePassword,
    toggleConfirmPassword,
  } = useRegistrationForm();

  if (submitted) {
    return (
      <SuccessScreen
        name={formData.fullName}
        email={formData.email}
        onReset={resetForm}
      />
    );
  }

  return (
    <div style={styles.page}>
      <div
        style={{
          ...styles.card,
          animation: shake ? "shake 0.55s ease" : "fadeInUp 0.5s ease",
        }}
      >
        {/* ── Header ──────────────────────────────────────────────── */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <span style={styles.logoText}>devSignup</span>
          </div>
          <h1 style={styles.title}>Create your account</h1>
          <p style={styles.subtitle}>Join thousands of developers today</p>
        </div>

        {/* ── Form ────────────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} noValidate style={styles.form}>

          {/* Full Name */}
          <FormField label="Full Name" htmlFor="fullName" error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Danish Khan"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle(errors.fullName, formData.fullName)}
              autoComplete="name"
            />
          </FormField>

          {/* Email */}
          <FormField label="Email Address" htmlFor="email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Test123@gmail.com"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle(errors.email, formData.email)}
              autoComplete="email"
            />
          </FormField>

          {/* Password */}
          <FormField label="Password" htmlFor="password" error={errors.password}>
            <div style={styles.inputWrapper}>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 6 characters"
                value={formData.password}
                onChange={handleChange}
                style={{ ...inputStyle(errors.password, formData.password), paddingRight: "44px" }}
                autoComplete="new-password"
              />
              <button
                type="button"
                style={styles.eyeBtn}
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>
            {formData.password && (
              <PasswordStrengthBar strength={passwordStrength} />
            )}
          </FormField>

          {/* Confirm Password */}
          <FormField label="Confirm Password" htmlFor="confirmPassword" error={errors.confirmPassword}>
            <div style={styles.inputWrapper}>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ ...inputStyle(errors.confirmPassword, formData.confirmPassword), paddingRight: "44px" }}
                autoComplete="new-password"
              />
              <button
                type="button"
                style={styles.eyeBtn}
                onClick={toggleConfirmPassword}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon open={showConfirmPassword} />
              </button>
            </div>
          </FormField>

          {/* Terms Checkbox */}
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <span style={styles.checkboxText}>
                I agree to the{" "}
                <span style={styles.link}>Terms of Service</span> and{" "}
                <span style={styles.link}>Privacy Policy</span>
              </span>
            </label>
            {errors.agreeTerms && (
              <p style={{ ...styles.errorMsg, marginTop: "6px" }}>
                ❌ {errors.agreeTerms}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isDisabled}
            style={isDisabled ? styles.submitDisabled : styles.submitActive}
          >
            Create Account
          </button>

          <p style={styles.signinPrompt}>
            Already have an account?{" "}
            <span style={styles.link}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  },
  card: {
    width: "100%",
    maxWidth: "440px",
    background: "#161b22",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "2.5rem 2rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
    marginBottom: "1rem",
  },
  logoText: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.5px",
  },
  title: {
    margin: "0 0 6px",
    fontSize: "22px",
    fontWeight: "700",
    color: "#e6edf3",
    letterSpacing: "-0.3px",
  },
  subtitle: {
    margin: 0,
    fontSize: "14px",
    color: "rgba(230,237,243,0.45)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#e6edf3",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
  },
  eyeBtn: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "rgba(230,237,243,0.4)",
    padding: "0",
    display: "flex",
    alignItems: "center",
  },
  errorMsg: {
    margin: "4px 0 0",
    fontSize: "12px",
    color: "#fc8181",
    fontWeight: "400",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    cursor: "pointer",
  },
  checkbox: {
    marginTop: "2px",
    width: "15px",
    height: "15px",
    accentColor: "#63cab7",
    cursor: "pointer",
    flexShrink: 0,
  },
  checkboxText: {
    fontSize: "13px",
    color: "rgba(230,237,243,0.6)",
    lineHeight: "1.5",
  },
  link: {
    color: "#63cab7",
    cursor: "pointer",
    textDecoration: "underline",
    textDecorationColor: "rgba(99,202,183,0.4)",
  },
  submitActive: {
    marginTop: "0.5rem",
    padding: "13px",
    background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    letterSpacing: "0.2px",
    transition: "opacity 0.2s ease, transform 0.1s ease",
  },
  submitDisabled: {
    marginTop: "0.5rem",
    padding: "13px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "10px",
    color: "rgba(230,237,243,0.25)",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "not-allowed",
    letterSpacing: "0.2px",
  },
  signinPrompt: {
    textAlign: "center",
    fontSize: "13px",
    color: "rgba(230,237,243,0.4)",
    margin: "0.5rem 0 0",
  },
};
