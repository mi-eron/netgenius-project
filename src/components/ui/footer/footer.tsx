import "./_footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoMdCall, IoIosMailOpen } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
    return (
        <section className="footer">
            <div className="section_bg" />

            <div className="footer_content">
                <div className="first_column">
                    <h3 className="logo h_2">NetGenius</h3>

                    <div className="media_links">
                        <div className="media_link">
                            <FaFacebookF className="h_4" />
                        </div>
                        <div className="media_link">
                            <FaXTwitter className="h_4" />
                        </div>
                        <div className="media_link">
                            <FaLinkedinIn className="h_4" />
                        </div>
                        <div className="media_link">
                            <BiLogoInstagramAlt className="h_4" />
                        </div>
                    </div>
                </div>

                <div className="second_column">
                    <div className="info_column">
                        <h5 className="title | h_4">Contact Info</h5>
                        <ul className="info_list">
                            <li className="info_item | p">
                                <IoMdCall className="h_4" /> (123)-456-789
                            </li>
                            <li className="info_item | p">
                                <MdAlternateEmail className="h_4" />
                                info@netgenius.com
                            </li>
                            <li className="info_item | p">
                                <FaLocationDot className="h_4" /> 123 Roger St.,
                                CA
                            </li>
                        </ul>
                    </div>

                    <div className="info_column">
                        <h5 className="title | h_4">useful Info</h5>
                        <ul className="info_list">
                            <li className="info_item | p">
                                <IoChevronForward className="h_4" />
                                Support Center
                            </li>
                            <li className="info_item | p">
                                <IoChevronForward className="h_4" />
                                Privacy Policy
                            </li>
                            <li className="info_item | p">
                                <IoChevronForward className="h_4" /> Cookie
                                Policy
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="third_column">
                    <h5 className="title | h_4">Subscribe to our newsletter</h5>
                    <p className="p">
                        Sign up for our newsletter to get latest updates. Do not
                        worry, we ill not spam you.
                    </p>
                    <div className="newsletter_cta">
                        <input type="text" placeholder="Eamil Address" />
                        <button className="btn h_4">
                            <IoIosMailOpen className="h_4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="divider" />

            <div className="copyright | p">
                <AiOutlineCopyrightCircle className="h_4" /> 2024 NetGenius. All
                rights reserved.
            </div>
        </section>
    );
};
