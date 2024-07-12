"use client";

import { useCallback, useEffect, useState } from "react";
import "./_testimonials.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const testimonials = [
    {
        id: "1",
        name: "Christina Harris",
        image: "/images/person-1.jpg",
        designation: "CEO at ABC",
        testimony:
            "We not have a fantastic website that perfectly encapsulates the essence of our company thanks to them. Their service has exceeded all of our expectations, making us extremely happy.",
    },
    {
        id: "2",
        name: "Robert James",
        image: "/images/person-2.jpg",
        designation: "CEO at DEF",
        testimony:
            "NetGenius has been our go-to company for many years. They've provided us with an unparalleled service, and we've been using their expertise to build our business for over a decade.",
    },
    {
        id: "3",
        name: "Jane Smith",
        image: "/images/person-3.jpg",
        designation: "CEO at GHI",
        testimony:
            "I've been using NetGenius for over a year now, and I absolutely love their help. They've been incredibly helpful and have saved me countless hours of debugging and fixing issues.",
    },
    {
        id: "4",
        name: "Mike Johnson",
        image: "/images/person-4.jpg",
        designation: "CEO at JKL",
        testimony:
            "I've been using NetGenius for over 5 years now, and I absolutely love their help. They've been incredibly helpful and have saved me countless hours of debugging and fixing issues.",
    },
];

export const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [slideInView, setSlideInView] = useState(0);

    const slideNodes = (direction: "left" | "right") => {
        if (!emblaApi) return;

        if (direction === "left") emblaApi.scrollPrev();
        else emblaApi.scrollNext();
        setSlideInView(emblaApi.selectedScrollSnap());
    };

    const updateSlideInView = useCallback((emblaApi: EmblaCarouselType) => {
        setSlideInView(emblaApi.selectedScrollSnap());
    }, []);

    const slideToNode = (index: number) => {
        if (!emblaApi) return;

        emblaApi.scrollTo(index);
        setSlideInView(index);
    };

    useEffect(() => {
        if (emblaApi) emblaApi.on("scroll", updateSlideInView);
    }, [emblaApi, updateSlideInView]);

    return (
        <section className="testimonials">
            <div className="section_bg" />
            <div className="quote_icon">
                <Image
                    src="/svgs/quote-icon.svg"
                    width={80}
                    height={80}
                    alt="Quote Icon"
                />
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla_container">
                    {testimonials.map(
                        ({ id, name, image, designation, testimony }) => (
                            <div key={id} className="embla_slide">
                                <p className="p">{testimony}</p>

                                <div className="person">
                                    <Image
                                        className="person__image"
                                        src={image}
                                        quality={100}
                                        width={50}
                                        height={50}
                                        alt={name}
                                    />
                                    <div className="person_info">
                                        <h3 className="h_4">{name}</h3>
                                        <p className="p">{designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="slide_controls">
                <button
                    className="arrow arrow--left"
                    onClick={() => slideNodes("left")}
                >
                    <FaChevronLeft className="h_4" />
                </button>
                <button
                    className="arrow arrow--right"
                    onClick={() => slideNodes("right")}
                >
                    <FaChevronRight className="h_4" />
                </button>

                <div className="slide_indicators">
                    {Array.from({ length: testimonials.length }, (_, i) => (
                        <div
                            key={i}
                            onClick={() => slideToNode(i)}
                            className={`indicator ${
                                i === slideInView && "indicator--active"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
