import { GenderTypes } from "../config/types";

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

export const windowHistoryReplaceState = (
  birthday: string,
  gender: GenderTypes
) => {
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

export const validateBirthday = (birthday: string | null) => {
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

export const validateGender = (gender: GenderTypes) => {
  if (!gender) return false;
  if (gender !== "male" && gender !== "female") {
    return false;
  } else {
    return true;
  }
};

export const calcWeek = (y: number, m: number, d: number) => {
  const newDate = new Date(y, m - 1, d);
  const index = newDate.getDay();
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];

  const weekClass: string =
    index === 0 ? `class="red"` : index === 6 ? `class="blue"` : "";

  return `<span ${weekClass && weekClass}>（${weeks[index]}）</span>`;
};

export const calcOmiya = (
  y: number,
  m: number,
  d: number,
  gender: GenderTypes
) => {
  const result =
    gender === "male" ? new Date(y, m, d + 30) : new Date(y, m, d + 31);
  return result;
};

export const calcSekku = (
  y: number,
  m: number,
  d: number,
  gender: GenderTypes
) => {
  const omiya = calcOmiya(y, m, d, gender);
  const omiyaStr = new Date(
    `${omiya.getFullYear()}-${omiya.getMonth() + 1}-${omiya.getDate()}`
  );

  const sekku = gender === "male" ? new Date(y, 4, 5) : new Date(y, 2, 3);
  const sekkuStr = new Date(
    `${sekku.getFullYear()}-${sekku.getMonth() + 1}-${sekku.getDate()}`
  );
  const sekkuNextStr = new Date(
    `${sekku.getFullYear() + 1}-${sekku.getMonth() + 1}-${sekku.getDate()}`
  );

  const result = sekkuStr >= omiyaStr ? sekkuStr : sekkuNextStr;

  return new Date(result.getFullYear(), result.getMonth(), result.getDate());
};

export const calcSeijin = (year: number) => {
  const y = year + 19;

  const newDate = new Date(`${y}/1/1`);
  const firstDay = newDate.getDay();

  let d = 1 - firstDay + 1;
  if (d <= 0) d += 7;

  d += 7 * (2 - 1);

  const result = new Date(y, 1, d - 1);

  return result;
};

export const calcEventDate = (
  birthday: string | null,
  gender: GenderTypes,
  id: string
) => {
  if (!birthday || !gender || !id) return;

  const date = birthday.split("-");
  const y = Number(date[0]);
  const m = Number(date[1]) - 1;
  const d = Number(date[2]);

  let result;

  switch (id) {
    case "oshichiya":
      result = new Date(y, m, d + 6);
      break;
    case "omiyamairi":
      result = calcOmiya(y, m, d, gender);
      break;
    case "sekkuTango":
    case "sekkuMomo":
      result = calcSekku(y, m, d, gender);
      break;
    case "okuizome":
      result = new Date(y, m, d + 99);
      break;
    case "halfBirthday":
      result = new Date(y, m + 6, d);
      break;
    case "birthday":
      result = new Date(y + 1, m, d);
      break;
    case "shichigosan03":
      result = new Date(y + 3, 10, 15);
      break;
    case "shichigosan05":
      result = new Date(y + 5, 10, 15);
      break;
    case "shichigosan07":
      result = new Date(y + 7, 10, 15);
      break;
    case "primarySchool":
      result = new Date(y + 6, 3, 1);
      break;
    case "jyusanmairiMale":
    case "jyusanmairiFemale":
      result = new Date(y + 12, 3, 13);
      break;
    // case "seijin":
    //   result = calcSeijin(y);
    //   break;
    default:
      return;
  }

  const newY = result.getFullYear();
  const newM = result.getMonth() + 1;
  const newD = result.getDate();

  return `<span>${newY}年${newM}月${newD}日</span>${calcWeek(
    newY,
    newM,
    newD
  )}`;
};
