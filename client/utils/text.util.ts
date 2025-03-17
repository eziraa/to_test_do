export const shortenText = (text: string, maxLength: number = 40) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}