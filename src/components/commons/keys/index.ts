import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "omedate",
  storage: localStorage,
});

export const birthday = atom<string>({
  key: "birthday",
  default: "2022-05-17",
  effects_UNSTABLE: [persistAtom],
});

export const gender = atom<string>({
  key: "gender",
  default: "none",
  effects_UNSTABLE: [persistAtom],
});
