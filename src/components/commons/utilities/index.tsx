export const currentDate = (str: string) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (str === "year") {
    return year;
  } else if (str === "month") {
    return month;
  } else if (str === "day") {
    return day;
  } else if (str === "full") {
    return `${year}-${("00" + month).slice(-2)}-${day}`;
  }
};

export const joinDateHyphen = (date: string) => {
  const _year = date.slice(0, 4);
  const _month = date.slice(4, 6);
  const _day = date.slice(6, 8);

  return `${_year}-${_month}-${_day}`;
};
