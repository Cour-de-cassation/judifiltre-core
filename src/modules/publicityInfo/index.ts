import { publicityInfoType } from "./types";
import { generatePublicityInfo } from "./lib";

export { publicityInfoModule };

export type { publicityInfoType };

const publicityInfoModule = {
  lib: {
    generatePublicityInfo,
  },
};
