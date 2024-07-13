"use client";

import { useState, CSSProperties } from "react";
import "./_navbar.scss";
import { CgClose } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

interface CustomCSSProperties extends CSSProperties {
    "--_i": number;
}

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
                <h3 className="logo h_2">NetGenius</h3>

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
                    <li
                        key={id}
                        className="nav_item h_4"
                        style={{ "--_i": id } as CustomCSSProperties}
                    >
                        {label}
                    </li>
                ))}
                <span className="icon--round icon--clickable">
                    <IoMdCall className="h_4" />
                </span>
            </ul>
        </section>
    );
};
