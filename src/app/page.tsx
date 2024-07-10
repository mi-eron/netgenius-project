import "./_page.scss";

import { BGImage, Navbar } from "@/components";

export default function Home() {
    return (
        <main className="home">
            <Navbar />
            <BGImage />
        </main>
    );
}
