import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const contactLeftAnim = {
    hidden: {
        opacity: 0,
        x: -400,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: DURATION,
            ease: easeInOut,
        },
    },
};

export const contactRightAnim = {
    hidden: {
        opacity: 0,
        x: 400,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: DURATION,
            ease: easeInOut,
        },
    },
};
