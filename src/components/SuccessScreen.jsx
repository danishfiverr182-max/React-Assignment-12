/**
 * Shown after a successful form submission.
 * @param {{ name: string, email: string, onReset: () => void }} props
 */
export default function SuccessScreen({ name, email, onReset }) {
  const firstName = name.split(" ")[0];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <CheckCircleIcon />
        <h2 style={styles.title}>Registration Successful!</h2>
        <p style={styles.sub}>Welcome aboard, {firstName}.</p>
        <p style={styles.email}>{email}</p>
        <button style={styles.resetBtn} onClick={onReset}>
          Register another account
        </button>
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#48bb78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>
  );
}

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
    padding: "3rem 2rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    textAlign: "center",
    animation: "fadeInUp 0.5s ease",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#e6edf3",
    margin: "0 0 8px",
  },
  sub: {
    fontSize: "15px",
    color: "rgba(230,237,243,0.6)",
    margin: "0 0 6px",
  },
  email: {
    fontSize: "13px",
    color: "#63cab7",
    margin: "0 0 2rem",
  },
  resetBtn: {
    padding: "10px 24px",
    background: "rgba(99,202,183,0.12)",
    border: "1px solid rgba(99,202,183,0.3)",
    borderRadius: "8px",
    color: "#63cab7",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
  },
};
