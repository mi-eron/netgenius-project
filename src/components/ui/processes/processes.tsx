import "./_processes.scss";
import Image from "next/image";

interface IProcessCard {
    id: number;
    icon: string;
    title: string;
}

const processCards: IProcessCard[] = [
    {
        id: 1,
        icon: "/svgs/process-1-icon.svg",
        title: "Discovery",
    },
    {
        id: 2,
        icon: "/svgs/process-2-icon.svg",
        title: "Strategy",
    },
    {
        id: 3,
        icon: "/svgs/process-3-icon.svg",
        title: "Execution",
    },
    {
        id: 4,
        icon: "/svgs/process-4-icon.svg",
        title: "Launch",
    },
];

export const Processes = () => {
    return (
        <section className="processes">
            <div className="section_bg" />

            <h2 className="h_1">Work Process</h2>
            <h3 className="h_2">Method to the creativity</h3>
            <p className="p">
                Discover how we transform your ideas into digital solutions
                through our efficient work process.
            </p>

            <div className="processes--card-container">
                {processCards.map(({ id, icon, title }) => (
                    <div key={id} className="card">
                        <Image
                            className="icon"
                            src={icon}
                            quality={100}
                            width={60}
                            height={50}
                            alt={`${title} Icon`}
                        />
                        <p className="p">Step {id}</p>
                        <h4 className="h_4">{title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};
