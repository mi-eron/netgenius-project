"use client";

import "./_services.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";

import {
    servicesTextAnim,
    servicesCardAnim,
    servicesCtaLeft,
    servicesCtaRight,
} from "@/libs";

const serviceCards = [
    {
        id: 1,
        icon: "/svgs/website-design-icon.svg",
        title: "Website Design",
        description:
            "We create visually stunning and functional websites that not only attract visitors but also turn them into customers.",
        link: "",
    },
    {
        id: 2,
        icon: "/svgs/digital-marketing-icon.svg",
        title: "Digital Marketing",
        description:
            "Our expert team uses data-driven approach, leveraging the latest techniques to boost your online presence.",
        link: "",
    },
    {
        id: 3,
        icon: "/svgs/social-media-icon.svg",
        title: "Social Media",
        description:
            "Our social media experts craft compelling content, engage your audience, and manage your social presence.",
        link: "",
    },
    {
        id: 4,
        icon: "/svgs/graphic-design-icon.svg",
        title: "Graphic Design",
        description:
            "Our creative graphic designers produce engaging and impactful designs that capture your brand's essence.",
        link: "",
    },
];

export const Services = () => {
    return (
        <section className="services">
            <motion.h2
                className="h_1"
                variants={servicesTextAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Our Services
            </motion.h2>
            <motion.h3
                className="h_2"
                variants={servicesTextAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Crafting digital solutions tailored to your unique business
                needs
            </motion.h3>

            <div className="services--cards_container">
                <div className="container-corners">
                    <div className="top-left-corner">
                        <div className="line-vertical" />
                        <div className="line-horizontal" />
                    </div>
                    <div className="bottom-right-corner">
                        <div className="line-vertical" />
                        <div className="line-horizontal" />
                    </div>
                </div>
                {serviceCards.map(({ id, icon, title, description }) => (
                    <motion.div
                        key={id}
                        className="card card--bordered card--flex-start"
                        variants={servicesCardAnim}
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
                            alt={title}
                        />
                        <h4 className="h_3">{title}</h4>
                        <p className="p">{description}</p>
                        <button className="p services--card-btn">
                            Service Details <BsArrowRight />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="services--btn-container">
                <motion.button
                    className="btn h_4"
                    variants={servicesCtaLeft}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Discover More
                </motion.button>
                <motion.button
                    className="btn btn--no-border h_4"
                    variants={servicesCtaRight}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <span className="icon--round">
                        <IoMdCall className="h_4" />
                    </span>
                    <div className="btn--info">
                        <h5 className="h_4">(123)-456-789</h5>
                        <p className="p p--up">Talk to an expert</p>
                    </div>
                </motion.button>
            </div>
        </section>
    );
};
