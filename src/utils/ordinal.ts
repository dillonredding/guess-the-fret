function ordinalSuffix(n: number) {
  if (n % 10 === 1 && n % 100 !== 11) return 'st';
  else if (n % 10 === 2 && n % 100 !== 12) return 'nd';
  else if (n % 10 === 3 && n % 100 !== 13) return 'rd';
  else return 'th';
}

export const ordinal = (n: number) => `${n}${ordinalSuffix(n)}`;
