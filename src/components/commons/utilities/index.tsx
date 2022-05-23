export const currentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return `${year}-${("00" + month).slice(-2)}-${day}`;
};

export const replaceDateHyphen = (date: string) => date.replace(/-/g, "");

export const joinDateHyphen = (date: string) =>
  `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;

export const toCamelCase = (str: string) => {
  return str
    .split("_")
    .map(function (word, index) {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export const toInitialUpperCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const windowHistoryReplaceState = (birthday: string, gender: string) => {
  window.history.replaceState(
    "",
    "",
    `${process.env.REACT_APP_ROOT_DIR}?birthday=${replaceDateHyphen(
      birthday
    )}&gender=${gender}`
  );
};
