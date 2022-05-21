import { atom } from "recoil";

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
});

export const genderState = atom<string>({
  key: "genderState",
  default: "",
});

export const queryState = atom<{
  birthday: string | null;
  gender: string | null;
}>({
  key: "queryState",
  default: {
    birthday: "",
    gender: "",
  },
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: true,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
