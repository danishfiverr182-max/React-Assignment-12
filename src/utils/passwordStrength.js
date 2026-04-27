/**
 * Returns a strength score (0–5), label, and color for a given password.
 * @param {string} password
 * @returns {{ score: number, label: string, color: string }}
 */
export function getPasswordStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };

  let score = 0;
  if (password.length >= 6)          score++;
  if (password.length >= 10)         score++;
  if (/[A-Z]/.test(password))        score++;
  if (/[0-9]/.test(password))        score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: "Weak",        color: "#e53e3e" };
  if (score === 2) return { score, label: "Fair",        color: "#dd6b20" };
  if (score === 3) return { score, label: "Good",        color: "#d69e2e" };
  if (score === 4) return { score, label: "Strong",      color: "#38a169" };
  return             { score, label: "Very Strong",  color: "#2f855a" };
}
