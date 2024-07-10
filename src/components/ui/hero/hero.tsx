import "./_hero.scss";

export const Hero = () => {
    return (
        <section className="hero">
            <h1 className="h_0 hero_headline">
                Re-Imagine Your <span>Digital</span> Experience
            </h1>

            <div className="hero--btn-container">
                <button className="btn">Get Started</button>
                <button className="btn btn--outline">Our Services</button>
            </div>
        </section>
    );
};
