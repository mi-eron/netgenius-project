import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const servicesTextAnim = {
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

export const servicesCardAnim = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    animate: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.15,
            duration: DURATION,
            ease: easeInOut,
        },
    }),
};

export const servicesCtaLeft = {
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

export const servicesCtaRight = {
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
