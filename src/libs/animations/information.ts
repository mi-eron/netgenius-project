import { easeInOut } from "framer-motion";
import { DURATION } from "./config";

export const informationColumnAnim = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.15,
            duration: DURATION,
            ease: easeInOut,
        },
    }),
};
