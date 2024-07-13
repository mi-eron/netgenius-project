import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const heroHeadlineAnim = {
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

export const heroCtaLeft = {
    hidden: {
        opacity: 0,
        x: -50,
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

export const heroCtaRight = {
    hidden: {
        opacity: 0,
        x: 50,
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
