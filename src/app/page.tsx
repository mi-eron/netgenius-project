import "./_page.scss";

import { BGImage, FeatureCards, Hero, Navbar } from "@/components";

export default function Home() {
    return (
        <main className="home">
            <Navbar />
            <BGImage />
            <Hero />
            <FeatureCards />
        </main>
    );
}
