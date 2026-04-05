export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeWords = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const capitalizeAndRemoveUnderscore = (text: string) =>
  text
    .split('_')
    .map((word) => capitalize(word))
    .join(' ');

export const camelize = (str: string) =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });

export const isEmpty = (str: string) => str.trim().length === 0;
