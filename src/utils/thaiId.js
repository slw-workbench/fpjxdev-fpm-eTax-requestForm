export function validateThaiTaxId(value) {
  const digits = String(value).replace(/\D/g, '');
  if (digits.length !== 13) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(digits.charAt(i), 10) * (13 - i);
  }
  const check = (11 - (sum % 11)) % 10;
  return check === parseInt(digits.charAt(12), 10);
}
