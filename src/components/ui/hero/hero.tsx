"use client";

import "./_hero.scss";
import { motion } from "framer-motion";

import { heroHeadlineAnim, heroCtaLeft, heroCtaRight } from "@/libs";

export const Hero = () => {
    return (
        <section className="hero">
            <motion.h1
                className="h_0 hero_headline"
                variants={heroHeadlineAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Re-Imagine Your <span>Digital</span> Experience
            </motion.h1>

            <div className="hero--btn-container">
                <motion.button
                    className="btn"
                    variants={heroCtaLeft}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Get Started
                </motion.button>
                <motion.button
                    className="btn btn--outline"
                    variants={heroCtaRight}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.button>
            </div>
        </section>
    );
};
