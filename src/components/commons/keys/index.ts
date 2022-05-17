import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "omedate",
  storage: localStorage,
});

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "2022-05-17",
  effects_UNSTABLE: [persistAtom],
});

export const genderState = atom<string>({
  key: "genderState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const genderQuery = atom<string>({
  key: "genderQuery",
  default: "",
});
