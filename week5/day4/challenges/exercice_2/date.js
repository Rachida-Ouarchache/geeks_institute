
export function minutesLived(birthdateString) {
  const birthdate = new Date(birthdateString);
  const now = new Date();

  const diff = now - birthdate;

  const minutes = Math.floor(diff / (1000 * 60));

  return `You have lived approximately ${minutes.toLocaleString()} minutes.`;
}
