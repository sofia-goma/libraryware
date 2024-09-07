export default function getFormattedInitials(name: string) {
  const words = name.split(" ").filter((word) => word.toUpperCase());
  if (words.length >= 2) {
    return `${words[0][0]} ${words[1][0].toUpperCase()}`;
  } else if (words.length === 1) {
    return words[0][0].toUpperCase();
  } else {
    return "";
  }
}