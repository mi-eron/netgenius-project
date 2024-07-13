"use client";

import "./_processes.scss";
import Image from "next/image";
import { motion } from "framer-motion";

interface IProcessCard {
    id: number;
    icon: string;
    title: string;
}
import { processesTextAnim, processesCardAnim } from "@/libs";

const processCards: IProcessCard[] = [
    {
        id: 1,
        icon: "/svgs/process-1-icon.svg",
        title: "Discovery",
    },
    {
        id: 2,
        icon: "/svgs/process-2-icon.svg",
        title: "Strategy",
    },
    {
        id: 3,
        icon: "/svgs/process-3-icon.svg",
        title: "Execution",
    },
    {
        id: 4,
        icon: "/svgs/process-4-icon.svg",
        title: "Launch",
    },
];

export const Processes = () => {
    return (
        <section className="processes">
            <div className="section_bg" />

            <motion.h2
                className="h_1"
                variants={processesTextAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Work Process
            </motion.h2>
            <motion.h3
                className="h_2"
                variants={processesTextAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Method to the creativity
            </motion.h3>
            <motion.p
                className="p"
                variants={processesTextAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Discover how we transform your ideas into digital solutions
                through our efficient work process.
            </motion.p>

            <div className="processes--card-container">
                {processCards.map(({ id, icon, title }) => (
                    <motion.div
                        key={id}
                        className="card"
                        variants={processesCardAnim}
                        initial="hidden"
                        whileInView="animate"
                        custom={id}
                        viewport={{ once: true }}
                    >
                        <Image
                            className="icon"
                            src={icon}
                            quality={100}
                            width={60}
                            height={50}
                            alt={`${title} Icon`}
                        />
                        <p className="p">Step {id}</p>
                        <h4 className="h_4">{title}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
