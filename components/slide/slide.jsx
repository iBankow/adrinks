import { SlideShow } from "./style";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Slide({ slides }) {
  const [current, setCurrent] = useState(0);
  const lenght = slides.length;

  function nextSlide() {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SlideShow>
      <section>
        <div className="nav">
          <button onClick={prevSlide}>
            <IoIosArrowBack className="icon" />
          </button>
          <button onClick={nextSlide} className="second">
            <IoIosArrowForward className="icon" />
          </button>
        </div>
        <div className="slide">
          {slides.map((slide, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                key={slide.id}
                className={index === current ? "slider active" : "slider"}
              >
                {index === current && (
                  <>
                    <div className="info">
                      <span>
                        <p>{slide.type}</p>
                      </span>
                      <hr className="divisor" />
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <button>COMPRAR</button>
                    </div>
                    <div className="slide-container">
                      <div className="bg"></div>
                      <div className={`image`}>
                        <Image
                          src={slide.image}
                          width="532"
                          height="752"
                          alt="drink"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SlideShow>
  );
}
