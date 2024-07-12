"use client";

import "./_information.scss";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

interface AccordionItem {
    id: number;
    title: string;
    content: string;
}

const accordionData: AccordionItem[] = [
    {
        id: 1,
        title: "Ethical Business Practices",
        content:
            "We maintain the highest level of professionalism and ethical standards in all of our business dealings.",
    },
    {
        id: 2,
        title: "Continual Improvement",
        content:
            "We constantly enhance our services to remain at the forefront of industry trends and technology.",
    },
    {
        id: 3,
        title: "Transparent Communication",
        content:
            "We maintain open and honest communication with clients throughout every project phase.",
    },
    {
        id: 4,
        title: "Competitive Pricing",
        content:
            "Our services are priced competitively to ensure you get the best value without sacrificing quality.",
    },
    {
        id: 5,
        title: "On-time Project Delivery",
        content:
            "We are committed to delivering your projects on time, ensuring timely execution of your plans.",
    },
    {
        id: 6,
        title: "Data-driven Approach",
        content:
            "We use data and analytics to inform all decisions, ensuring effective and tailored strategies.",
    },
];

export const Information: React.FC = () => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndices((prevState) =>
            prevState.includes(index)
                ? prevState.filter((i) => i !== index)
                : [...prevState, index]
        );
    };

    return (
        <section className="information">
            <div className="section_bg" />

            <div className="information_content">
                <h2 className="h_1">Why Choose Us</h2>
                <h3 className="h_2">
                    Crafting experiences, delivering success
                </h3>
                <p className="p">
                    Our commitment to quality and excellence is unparalleled.
                    From the first brainstorming session to the final product
                    delivery, we ensure that every step of the process is
                    executed to perfection. You are not just getting a service,
                    you are getting a partner who is committed to your growth
                    and success.
                </p>
            </div>
            <div className="information_image">
                <Image
                    src="/images/information-image.jpg"
                    quality={100}
                    width={300}
                    height={400}
                    alt="Information Image"
                />
            </div>
            <ul className="information_accordion">
                {accordionData.map(({ id, title, content }, index) => (
                    <li className="accordion_item" key={id}>
                        <div
                            className="accordion_header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h5 className="h_4">{title}</h5>
                            {openIndices.includes(index) ? (
                                <FaChevronUp className="h_4" />
                            ) : (
                                <FaChevronDown className="h_4" />
                            )}
                        </div>
                        {openIndices.includes(index) && (
                            <p className="p">{content}</p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};
