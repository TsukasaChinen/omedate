import { atom } from "recoil";

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
});

export type GenderTypes = "male" | "female" | "";
export const genderState = atom<GenderTypes>({
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

export const resultState = atom<boolean>({
  key: "resultState",
  default: false,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
