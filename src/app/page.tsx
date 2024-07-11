import "./_page.scss";

import { About, BGImage, FeatureCards, Hero, Navbar } from "@/components";

export default function Home() {
    return (
        <main className="home">
            <Navbar />
            <BGImage />
            <Hero />
            <FeatureCards />
            <About />
        </main>
    );
}
