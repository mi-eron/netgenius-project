"use client";

import "./_benefits.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { benefitsContentAnim, benefitsNumbersAnim } from "@/libs";

export const Benefits = () => {
    return (
        <section className="benefits">
            <div className="section_bg">
                <Image
                    src="/images/benefits-bg.jpg"
                    quality={100}
                    width={1000}
                    height={500}
                    alt="Benefits Image"
                />
            </div>

            <div className="benefits--inner-container">
                <motion.div
                    className="content_container"
                    variants={benefitsContentAnim}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <h2 className="h_1">Key Benefits</h2>
                    <h3 className="h_2">Your partner in digital success.</h3>
                    <p className="p p--darker">
                        Our services are designed with a primary focus on the
                        benefits they can bring to your business. We seek to
                        streamline your processes and operations, utilizing the
                        latest technologies to automate tasks and reduce
                        overheads.
                    </p>

                    <ul className="benefits--bullet-points">
                        <li className="bullet_item | p p--darker">
                            <IoCheckmarkCircleOutline className="h_3" />
                            Digital solutions under one roof.
                        </li>
                        <li className="bullet_item | p p--darker">
                            <IoCheckmarkCircleOutline className="h_3" />
                            Strategies tailored to your business needs.
                        </li>
                        <li className="bullet_item | p p--darker">
                            <IoCheckmarkCircleOutline className="h_3" />
                            Competitive pricing for exceptional value.
                        </li>
                        <li className="bullet_item | p p--darker">
                            <IoCheckmarkCircleOutline className="h_3" />
                            Ongoing support and assistance.
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="achievements_container"
                    variants={benefitsNumbersAnim}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="achievement_item">
                        <h3 className="h_2">12+</h3>
                        <p className="p p--up">Years of experience</p>
                    </div>
                    <div className="achievement_item">
                        <h3 className="h_2">500+</h3>
                        <p className="p p--up">Happy clients</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
