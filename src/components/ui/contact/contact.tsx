"use client";

import { useEffect, useRef } from "react";
import "./_contact.scss";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

import { contactLeftAnim, contactRightAnim } from "@/libs";

export const Contact = () => {
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
        <section className="contact" id="Contact">
            <div className="section_bg">
                <Image
                    src="/images/contact-bg.jpg"
                    quality={100}
                    width={1000}
                    height={400}
                    alt=""
                />
            </div>

            <div className="contact--inner-container">
                <motion.div
                    className="contact_content"
                    variants={contactLeftAnim}
                    initial="hidden"
                    animate={mainControls}
                    viewport={{ once: true }}
                >
                    <h3 className="h_2">
                        Grow your business with our robust digital solutions.
                    </h3>
                    <p className="p">
                        We consistently exceed our clients&apos; expectations by
                        providing high-quality solutions. Get in touch with us
                        to get started.
                    </p>
                </motion.div>

                <motion.div
                    className="contact_cta"
                    variants={contactRightAnim}
                    initial="hidden"
                    animate={mainControls}
                    viewport={{ once: true }}
                >
                    <div className="cta--top-btns">
                        <button className="btn btn--no-border h_4">
                            <span className="icon--round">
                                <IoMdCall className="h_4" />
                            </span>
                            <div className="btn--info">
                                <h5 className="h_4">(123)-456-789</h5>
                                <p className="p p--up">Talk to an expert</p>
                            </div>
                        </button>
                        <button className="btn btn--no-border h_4">
                            <span className="icon--round">
                                <MdAlternateEmail className="h_4" />
                            </span>
                            <div className="btn--info">
                                <h5 className="h_4">info@netgenius.com</h5>
                                <p className="p p--up">Email us</p>
                            </div>
                        </button>
                    </div>
                    <div className="cta--bottom-btns">
                        <button className="btn h_4">Get Started</button>
                    </div>
                </motion.div>
            </div>
            <div ref={rootRef} className="contact--hidden_element" />
        </section>
    );
};
