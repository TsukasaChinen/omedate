import { atom } from "recoil";

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
});

export const genderState = atom<string>({
  key: "genderState",
  default: "",
});
export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
