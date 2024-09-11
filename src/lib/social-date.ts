import {
  format,
  isToday,
  isYesterday,
  isThisWeek,
  differenceInSeconds,
} from "date-fns";

function socialDate(isoDateStr: number): string {
  const inputDate = new Date(isoDateStr);
  const currentDate = new Date();

  const timeDifferenceSeconds = differenceInSeconds(currentDate, inputDate);

  const oneMinute = 60;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  if (timeDifferenceSeconds < oneMinute) {
    return "Just now";
  }

  if (timeDifferenceSeconds < oneHour) {
    const minutesAgo = Math.floor(timeDifferenceSeconds / oneMinute);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  }

  if (timeDifferenceSeconds < oneDay) {
    const hoursAgo = Math.floor(timeDifferenceSeconds / oneHour);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  }

  if (isToday(inputDate)) {
    return `${format(inputDate, "h:mm a")} today`;
  }

  if (isYesterday(inputDate)) {
    return "Yesterday";
  }

  if (isThisWeek(inputDate)) {
    return format(inputDate, "EEEE");
  }

  return format(inputDate, "MMMM d, yyyy");
}

export default socialDate;
