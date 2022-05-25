export const replaceDateHyphen = (date: string) => date.replaceAll("-", "");

export const joinDateHyphen = (date: string) =>
  `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;

export const getToday = (): string => {
  const currentDate = new Date();
  const y = currentDate.getFullYear();
  const m = currentDate.getMonth() + 1;
  const d = currentDate.getDate();
  return `${y}-${("00" + m).slice(-2)}-${d}`;
};

export const windowHistoryReplaceState = (birthday: string, gender: string) => {
  window.history.replaceState(
    "",
    "",
    `${process.env.REACT_APP_ROOT_DIR}?birthday=${replaceDateHyphen(
      birthday
    )}&gender=${gender}`
  );
};

export const noScrollBodyAndHtml = (bool: boolean) => {
  if (bool) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }
};

export const validateBirthday = (birthday: string | null): boolean => {
  if (!birthday) return false;

  const m = Number(birthday.slice(4, 6));
  const d = Number(birthday.slice(6, 8));

  if (birthday.length !== 8) {
    return false;
  } else if (isNaN(Number(birthday))) {
    return false;
  } else if (m < 1 || m > 12) {
    return false;
  } else if (d < 1 || d > 31) {
    return false;
  } else {
    return true;
  }
};

export const validateGender = (gender: string | null): boolean => {
  if (!gender) return false;
  if (gender !== "male" && gender !== "female") {
    return false;
  } else {
    return true;
  }
};
