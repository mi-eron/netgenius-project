"use client";

import "./_about.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiUserStarLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";

import { aboutSectionAnim } from "@/libs";

export const About = () => {
    return (
        <section className="about">
            <div className="section_bg" />
            <motion.div
                className="about_content"
                variants={aboutSectionAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <h2 className="h_1">About Us</h2>
                <h3 className="h_2">
                    Unleashing possibilities in the digital world.
                </h3>
                <p className="p">
                    We believe in creating m ore than just digital solutions -
                    we create experience. Our customer-centric approach assures
                    that every solution we craft is perfectly aligned with your
                    business objectives and customer needs. We blend creativity
                    with technology to deliver solutions that are not just
                    aesthetically pleasing but also functioanlly superior.
                </p>

                <ul className="about--bullet_points">
                    <li className="bullet_item">
                        <span className="icon--round">
                            <RiUserStarLine className="h_4" />
                        </span>
                        <div className="content">
                            <h4 className="h_3">Customer-centric Focus</h4>
                            <p className="p">
                                We put our clients at the heart of what we do,
                                creating solutions that resonate with your
                                audiene and drive engagement.
                            </p>
                        </div>
                    </li>
                    <li className="bullet_item">
                        <span className="icon--round">
                            <HiOutlineSupport className="h_4" />
                        </span>
                        <div className="content">
                            <h4 className="h_3">Professional Support</h4>
                            <p className="p">
                                We provide round-the-clock support to ensure
                                smooth operation and quick resolution of any
                                issue you might encouter.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
            <motion.div
                className="about_image"
                variants={aboutSectionAnim}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <Image
                    src="/images/about-image.jpg"
                    quality={100}
                    width={200}
                    height={200}
                    alt="About Image"
                />
            </motion.div>
        </section>
    );
};
