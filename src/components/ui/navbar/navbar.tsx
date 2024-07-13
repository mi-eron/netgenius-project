"use client";

import { useState } from "react";
import "./_navbar.scss";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

import { navLogoAnim, navLinkAnim } from "@/libs";
import Link from "next/link";

const navLinks = [
    {
        id: 1,
        label: "Home",
        path: "/",
    },
    {
        id: 2,
        label: "Services",
        path: "#Services",
    },
    {
        id: 3,
        label: "Contact",
        path: "#Contact",
    },
];

export const Navbar = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <section className={`navbar ${isExpanded && "navbar--bg"}`}>
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

                <button className="nav_button" onClick={toggleExpansion}>
                    {isExpanded ? (
                        <CgClose className="expanded | h_2" />
                    ) : (
                        <RiMenu3Fill className="collapsed | h_2" />
                    )}
                </button>
            </div>

            <ul className={`nav_links ${!isExpanded && "nav_links--hidden"}`}>
                {navLinks.map(({ id, label, path }) => (
                    <Link key={id} href={path}>
                        <motion.li
                            className="nav_item | h_4"
                            variants={navLinkAnim}
                            initial="hidden"
                            whileInView="animate"
                            custom={id}
                            viewport={{ once: true }}
                        >
                            {label}
                        </motion.li>
                    </Link>
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
