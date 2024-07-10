import "./_bg_image.scss";
import Image from "next/image";

export const BGImage = () => {
    return (
        <div className="bg_image">
            <Image
                src="/images/hero-bg.jpg"
                quality={75}
                width={500}
                height={500}
                alt="Background Image"
            />
            <div className="fade" />
            <div className="dashes">
                <div className="dashes_column">
                    {Array.from({ length: 100 }, (_, i) => (
                        <div key={`column-${i}`} className="dash" />
                    ))}
                </div>
                <div className="dashes_row">
                    {Array.from({ length: 100 }, (_, i) => (
                        <div key={`column-${i}`} className="dash" />
                    ))}
                </div>
            </div>
        </div>
    );
};
