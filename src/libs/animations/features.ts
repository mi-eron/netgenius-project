import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const featureCenterCardAnim = {
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

export const featureLeftCardAnim = {
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

export const featureRightCardAnim = {
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
