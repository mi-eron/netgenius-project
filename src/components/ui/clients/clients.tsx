"use client";

import "./_clients.scss";
import Image from "next/image";
import { motion } from "framer-motion";

import { bigClientsAnim, smallClientsAnim } from "@/libs";

const bigClients = [
    {
        id: 1,
        icon: "/svgs/amazon-icon.svg",
    },
    {
        id: 2,
        icon: "/svgs/costco-icon.svg",
    },
    {
        id: 3,
        icon: "/svgs/samsung-icon.svg",
    },
];

const smallClients = [
    {
        id: 1,
        icon: "/svgs/client-1-icon.svg",
    },
    {
        id: 2,
        icon: "/svgs/client-2-icon.svg",
    },
    {
        id: 3,
        icon: "/svgs/client-3-icon.svg",
    },
    {
        id: 4,
        icon: "/svgs/client-2-icon.svg",
    },
    {
        id: 5,
        icon: "/svgs/client-3-icon.svg",
    },
    {
        id: 6,
        icon: "/svgs/client-1-icon.svg",
    },
];

export const Clients = () => {
    return (
        <section className="clients">
            <div className="section_bg" />

            <div className="big_clients">
                {bigClients.map(({ id, icon }) => (
                    <motion.div
                        key={`big-client-${id}`}
                        className="big_client"
                        variants={bigClientsAnim}
                        initial="hidden"
                        whileInView="animate"
                        custom={id}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={icon}
                            quality={100}
                            width={80}
                            height={80}
                            alt="Client Icon"
                        />
                    </motion.div>
                ))}
            </div>
            <h5 className="h_4">We are trusted by thousands of clients</h5>
            <motion.div
                className="small_clients"
                variants={smallClientsAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {smallClients.map(({ id, icon }) => (
                    <Image
                        key={`small-client-${id}`}
                        src={icon}
                        quality={100}
                        width={70}
                        height={70}
                        alt="Client Icon"
                    />
                ))}
            </motion.div>
        </section>
    );
};
