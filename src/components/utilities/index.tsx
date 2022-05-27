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
  const date = new Date(y, m - 1, d);
  const index = date.getDay();
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

  const sekkuMale = "5-5";
  const sekkuFemale = "3-3";

  const sekkuStr =
    gender === "male"
      ? new Date(`${y}-${sekkuMale}`)
      : new Date(`${y}-${sekkuFemale}`);

  const sekkuNextStr =
    gender === "male"
      ? new Date(`${y + 1}-${sekkuMale}`)
      : new Date(`${y + 1}-${sekkuFemale}`);

  const result = sekkuStr >= omiyaStr ? sekkuStr : sekkuNextStr;

  return new Date(result.getFullYear(), result.getMonth(), result.getDate());
};

export const calcSeijin = (y: number) => {
  const date = new Date(`${y}/1/1`);

  let d = 1 - date.getDay() + 1;
  if (d <= 0) {
    d += 7;
  }

  d += 7 * (2 - 1);

  const result = new Date(y, 0, d);

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

  const earlies = {
    base: new Date(`${y}-${m + 1}-${d}`),
    start: new Date(`${y}-1-1`),
    end: new Date(`${y}-4-1`),
  };

  const isEarly =
    earlies.base >= earlies.start && earlies.base <= earlies.end ? true : false;

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
      result = isEarly ? new Date(y + 6, 3, 1) : new Date(y + 7, 3, 1);
      break;
    case "jyusanmairiMale":
    case "jyusanmairiFemale":
      result = new Date(y + 12, 3, 13);
      break;
    case "seijin":
      result = isEarly ? calcSeijin(y + 18) : calcSeijin(y + 19);
      break;
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
