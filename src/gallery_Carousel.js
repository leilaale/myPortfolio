import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <section className="card_Carousel">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={index === currentSlide ? 'carousel_slide active' : 'carousel_slide'}
                >
                    {index === currentSlide && (
                        <div className='carousel_column'>
                            {slide.type === 'image' ? (
                                <img src={slide.source} alt={slide.title} className="carousel_image" />
                            ) : (
                                <video src={slide.source} controls className="carousel_video">
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            <div className='carousel_imageInfo'>
                                <p className='image_description'>{slide.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Carousel;
