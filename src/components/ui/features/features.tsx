"use client";

import { useEffect, useRef } from "react";
import "./_features.scss";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

import {
    featureCenterCardAnim,
    featureLeftCardAnim,
    featureRightCardAnim,
} from "@/libs";

const featureCards = [
    {
        id: 1,
        title: "Tailor-made Strategies",
        description:
            "We do not believe in one size fits all. Our solutions are customized to your business needs.",
        icon: "/svgs/tailor-made-icon.svg",
    },
    {
        id: 2,
        title: "Experienced Team",
        description:
            "We have professionals with experience on our team. Each project benefits from their experise and enthusiasm.",
        icon: "/svgs/experienced-team-icon.svg",
    },
    {
        id: 3,
        title: "Quality Assurance",
        description:
            "We take quality seriously. It is essential to our workflow, ensuring high-quality deliverables.",
        icon: "/svgs/quality-assurance-icon.svg",
    },
];

export const Features = () => {
    const rootRef = useRef<HTMLHeadingElement | null>(null);
    const isInView = useInView(rootRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <section className="features">
            <div className="section_bg" />
            {featureCards.map(({ id, title, description, icon }) => (
                <motion.div
                    key={id}
                    className="card"
                    variants={
                        id === 1
                            ? featureLeftCardAnim
                            : id === 2
                            ? featureCenterCardAnim
                            : featureRightCardAnim
                    }
                    initial="hidden"
                    animate={mainControls}
                    viewport={{ once: true }}
                >
                    <Image
                        className="icon"
                        src={icon}
                        quality={100}
                        width={60}
                        height={50}
                        alt="Feature Card Icon"
                    />
                    <h4 className="h_3">{title}</h4>
                    <p className={`p ${id === 2 && "p--darker"}`}>
                        {description}
                    </p>
                </motion.div>
            ))}
            <div ref={rootRef} className="features--hidden_element" />
        </section>
    );
};
