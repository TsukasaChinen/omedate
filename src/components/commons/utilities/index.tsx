export const currentDate = (arg: string) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (arg === "year") {
    return year;
  } else if (arg === "month") {
    return month;
  } else if (arg === "day") {
    return day;
  } else if (arg === "full") {
    return `${year}-${("00" + month).slice(-2)}-${day}`;
  }
};
