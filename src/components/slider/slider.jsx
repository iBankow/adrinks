import { Slidedata } from "../data";
import { Container } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Slider() {
  const [slider, setSlider] = useState(10);
  const [current, setCurrent] = useState(0);
  const lenght = Slidedata.length;

  function styleSlide() {
    return { left: `-${slider}%` };
  }

  function nextSlide() {
    if (current === lenght - 1) {
      setCurrent(0);
      setSlider(10);
    } else {
      setSlider(slider + 20);
      setCurrent(current + 1);
    }
  }

  function prevSlide() {
    if (current === 0) {
      setCurrent(lenght - 1);
      setSlider(110);
    } else {
      setCurrent(current - 1);
      setSlider(slider - 20);
    }
  }

  if (!Array.isArray(Slidedata) || Slidedata.length <= 0) {
    return null;
  }

  return (
    <Container>
      <div className="slide-container">
        <span className="slider-span"></span>
        <div className="image-slider" style={styleSlide()}>
          {Slidedata.map((slide, index) => {
            return (
              <div className="slides-div" key={slide.id}>
                <img
                  className={index === current ? "img active" : "img"}
                  src={slide.image}
                  alt={slide.type}
                />
                <p className="button"></p>
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
