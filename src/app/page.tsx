import "./_page.scss";

import { BGImage, Hero, Navbar } from "@/components";

export default function Home() {
    return (
        <main className="home">
            <Navbar />
            <BGImage />
            <Hero />
        </main>
    );
}
