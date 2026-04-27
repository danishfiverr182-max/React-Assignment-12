/**
 * Renders the 5-segment password strength indicator.
 * @param {{ strength: { score: number, label: string, color: string } }} props
 */
export default function PasswordStrengthBar({ strength }) {
  if (!strength.label) return null;

  const barStyle = (index) => ({
    height: "4px",
    flex: 1,
    borderRadius: "2px",
    backgroundColor:
      index <= strength.score
        ? strength.color
        : "rgba(255,255,255,0.1)",
    transition: "background-color 0.3s ease",
  });

  return (
    <div style={styles.container}>
      <div style={styles.bars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={barStyle(i)} />
        ))}
      </div>
      <span style={{ ...styles.label, color: strength.color }}>
        {strength.label}
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "8px",
  },
  bars: {
    display: "flex",
    gap: "4px",
    flex: 1,
  },
  label: {
    fontSize: "11px",
    fontWeight: "600",
    minWidth: "70px",
    textAlign: "right",
  },
};
