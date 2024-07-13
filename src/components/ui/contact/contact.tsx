import "./_contact.scss";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

export const Contact = () => {
    return (
        <section className="contact">
            <div className="section_bg">
                <Image
                    src="/images/contact-bg.jpg"
                    quality={100}
                    width={1000}
                    height={400}
                    alt=""
                />
            </div>

            <div className="contact--inner-container">
                <div className="contact_content">
                    <h3 className="h_2">
                        Grow your business with our robust digital solutions.
                    </h3>
                    <p className="p">
                        We consistently exceed our clients&apos; expectations by
                        providing high-quality solutions. Get in touch with us
                        to get started.
                    </p>
                </div>

                <div className="contact_cta">
                    <div className="cta--top-btns">
                        <button className="btn btn--no-border h_4">
                            <span className="icon--round">
                                <IoMdCall className="h_4" />
                            </span>
                            <div className="btn--info">
                                <h5 className="h_4">(123)-456-789</h5>
                                <p className="p p--up">Talk to an expert</p>
                            </div>
                        </button>
                        <button className="btn btn--no-border h_4">
                            <span className="icon--round">
                                <MdAlternateEmail className="h_4" />
                            </span>
                            <div className="btn--info">
                                <h5 className="h_4">info@netgenius.com</h5>
                                <p className="p p--up">Email us</p>
                            </div>
                        </button>
                    </div>
                    <div className="cta--bottom-btns">
                        <button className="btn h_4">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
