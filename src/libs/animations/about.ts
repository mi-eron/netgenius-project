import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const aboutSectionAnim = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION,
            ease: easeInOut,
        },
    },
};
