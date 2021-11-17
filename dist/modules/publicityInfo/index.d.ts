import { publicityInfoType } from "./types";
import { generatePublicityInfo } from "./lib";
export { publicityInfoModule };
export type { publicityInfoType };
declare const publicityInfoModule: {
    lib: {
        generatePublicityInfo: typeof generatePublicityInfo;
    };
};
