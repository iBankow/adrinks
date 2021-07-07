/* eslint-disable @next/next/no-img-element */
import { Slidedata } from "../data";
import { Container } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Slider() {
  const [slider, setSlider] = useState(50);
  const [current, setCurrent] = useState(0);
  const lenght = Slidedata.length;

  function styleSlide() {
    return { transform: `translateX(${slider}%)` };
  }

  function nextSlide() {
    if (current === lenght - 1) {
      setCurrent(0);
      setSlider(50);
    } else {
      setSlider(slider - 20);
      setCurrent(current + 1);
    }
  }

  function prevSlide() {
    if (current === 0) {
      setCurrent(lenght - 1);
      setSlider(-50);
    } else {
      setCurrent(current - 1);
      setSlider(slider + 20);
    }
  }

  if (!Array.isArray(Slidedata) || Slidedata.length <= 0) {
    return null;
  }

  return (
    <Container>
      <div className="slide-container">
        <div className="image-slider" style={styleSlide()}>
          {Slidedata.map((slide, index) => {
            return (
              <div className="slides-div" key={slide.id}>
                <img
                  className={index === current ? "img active" : "img"}
                  src={slide.image}
                  alt={slide.type}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="nav">
        <button onClick={prevSlide}>
          <IoIosArrowBack className="icon" />
        </button>
        <button onClick={nextSlide} className="second">
          <IoIosArrowForward className="icon" />
        </button>
      </div>
    </Container>
  );
}
