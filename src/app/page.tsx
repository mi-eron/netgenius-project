import "./_page.scss";
import Image from "next/image";

import {
    About,
    BGImage,
    Clients,
    FeatureCards,
    Hero,
    Navbar,
    Services,
    Testimonials,
} from "@/components";

export default function Home() {
    return (
        <main className="home">
            <Image
                className="body_image"
                src={"/images/body-image.jpg"}
                quality={100}
                width={1000}
                height={1000}
                alt="Body Image"
            />
            <Navbar />
            <BGImage />
            <Hero />
            <FeatureCards />
            <About />
            <Services />
            <Testimonials />
            <Clients />
        </main>
    );
}
