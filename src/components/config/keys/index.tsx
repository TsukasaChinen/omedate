import { atom } from "recoil";
import { GenderTypes, QuiriesTypes } from "../types";

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
});

export const genderState = atom<GenderTypes>({
  key: "genderState",
  default: "",
});

export const queryState = atom<QuiriesTypes>({
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

export const homeState = atom<boolean>({
  key: "homeState",
  default: true,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
