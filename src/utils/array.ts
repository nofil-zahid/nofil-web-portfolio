export const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const removeDuplicates = <T,>(arr: T[]): T[] => (
  [...new Set(arr)]
);

export const getArrayTill = (length: number = 5, jump: number = 1): number[] => (
  Array.from({ length }).map((_, i) => i + jump)
);
