import "./_page.scss";
import Image from "next/image";

import {
    About,
    Benefits,
    BGImage,
    Clients,
    Contact,
    FeatureCards,
    Hero,
    Information,
    Navbar,
    Processes,
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
            <Benefits />
            <Information />
            <Processes />
            <Contact />
        </main>
    );
}
