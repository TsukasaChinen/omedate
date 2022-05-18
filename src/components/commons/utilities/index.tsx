export const currentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return `${year}-${("00" + month).slice(-2)}-${day}`;
};

export const splitDate = (date: string) => {
  return {
    year: date.slice(0, 4),
    month: date.slice(4, 6),
    day: date.slice(6, 8),
  };
};

export const joinDateHyphen = (date: string) => {
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
};
