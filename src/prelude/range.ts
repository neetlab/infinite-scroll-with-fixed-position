export const range = (start: number, end: number) => {
  if (end < start) throw Error("Invalid");

  return Array.from({ length: end - start }, (_, i) => {
    return i + start;
  });
};
