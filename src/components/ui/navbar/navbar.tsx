"use client";

import { useState } from "react";
import "./_navbar.scss";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

import { navLogoAnim, navLinkAnim } from "@/libs";

const navLinks = [
    {
        id: 1,
        label: "Home",
        path: "/",
    },
    {
        id: 2,
        label: "Services",
        path: "/services",
    },
    {
        id: 3,
        label: "Portfolio",
        path: "/ortfolio",
    },
    {
        id: 4,
        label: "Contact",
        path: "/contact",
    },
];

export const Navbar = () => {
    const [isExtended, setExtended] = useState(false);

    const toggleExtension = () => {
        setExtended((prev) => !prev);
    };

    return (
        <section className={`navbar ${isExtended && "navbar--bg"}`}>
            <div className="nav_buttons">
                <motion.h3
                    className="logo h_2"
                    variants={navLogoAnim}
                    initial="hidden"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    NetGenius
                </motion.h3>

                <button className="nav_button" onClick={toggleExtension}>
                    {isExtended ? (
                        <CgClose className="h_2" />
                    ) : (
                        <RiMenu3Fill className="h_2" />
                    )}
                </button>
            </div>

            <ul className={`nav_links ${!isExtended && "nav_links--hidden"}`}>
                {navLinks.map(({ id, label }) => (
                    <motion.li
                        key={id}
                        className="nav_item h_4"
                        variants={navLinkAnim}
                        initial="hidden"
                        whileInView="animate"
                        custom={id}
                        viewport={{ once: true }}
                    >
                        {label}
                    </motion.li>
                ))}
                <motion.span
                    className="icon--round icon--clickable"
                    variants={navLinkAnim}
                    initial="hidden"
                    whileInView="animate"
                    custom={navLinks.length + 1}
                    viewport={{ once: true }}
                >
                    <IoMdCall className="h_4" />
                </motion.span>
            </ul>
        </section>
    );
};
