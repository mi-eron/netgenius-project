import "./_feature_cards.scss";
import Image from "next/image";

const featureCards = [
    {
        id: 1,
        title: "Tailor-made Strategies",
        description:
            "We do not believe in one size fits all. Our solutions are customized to your business needs.",
        icon: "/svgs/tailor-made-icon.svg",
    },
    {
        id: 2,
        title: "Experienced Team",
        description:
            "We have professionals with experience on our team. Each project benefits from their experise and enthusiasm.",
        icon: "/svgs/experienced-team-icon.svg",
    },
    {
        id: 3,
        title: "Quality Assurance",
        description:
            "We take quality seriously. It is essential to our workflow, ensuring high-quality deliverables.",
        icon: "/svgs/quality-assurance-icon.svg",
    },
];

export const FeatureCards = () => {
    return (
        <section className="feature_cards">
            <div className="section_bg" />
            {featureCards.map(({ id, title, description, icon }) => (
                <div key={id} className="card">
                    <Image
                        className="icon"
                        src={icon}
                        quality={100}
                        width={60}
                        height={50}
                        alt="Feature Card Icon"
                    />
                    <h4 className="h_3">{title}</h4>
                    <p className={`p ${id === 2 && "p--darker"}`}>
                        {description}
                    </p>
                </div>
            ))}
        </section>
    );
};
