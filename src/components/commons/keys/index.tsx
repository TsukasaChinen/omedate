import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "omedate",
  storage: localStorage,
});

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});

export const genderState = atom<string>({
  key: "genderState",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});

export const queryState = atom<string>({
  key: "queryState",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
