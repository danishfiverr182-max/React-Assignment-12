/**
 @param {{ label: string, error?: string, htmlFor: string, children: React.ReactNode }} props
 */
export default function FormField({ label, error, htmlFor, children }) {
  return (
    <div style={styles.group}>
      <label style={styles.label} htmlFor={htmlFor}>
        {label}
      </label>

      {children}

      {error && <p style={styles.error}>❌ {error}</p>}
    </div>
  );
}

const styles = {
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "500",
    color: "rgba(230,237,243,0.75)",
    letterSpacing: "0.2px",
  },
  error: {
    margin: "4px 0 0",
    fontSize: "12px",
    color: "#fc8181",
    fontWeight: "400",
  },
};
