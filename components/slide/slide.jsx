import { SlideShow } from "./style";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { directus } from "../../services/api";
import ellipse from "../../public/assets/img/ellipse.svg";
import rectangle from "../../public/assets/img/rectangle.svg";

export default function Slide({ slides }) {
  const [slides2, setSlide] = useState([]);

  useEffect(() => {
    async function loadSlides() {
      const slides2 = await directus.get("items/articles");
      setSlide(slides2.data.data);
    }
    loadSlides();
  }, []);

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
        {slides2 && (
          <div className="divisor">
            <Image src={rectangle} alt="rectangle" className="rectangle" />
            {slides2.map((slide, index) => {
              return (
                <>
                  <div
                    className={index === current ? "ellipse active" : "ellipse"}
                    onClick={(e) => {
                      setCurrent(index);
                    }}
                  >
                    <Image
                      src={ellipse}
                      alt="ellipse"
                      width="10px"
                      height="10px"
                    />
                  </div>
                </>
              );
            })}
            <Image src={rectangle} alt="rectangle" />
          </div>
        )}
        <div className="slide">
          {slides2.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className={index === current ? "slider active" : "slider"}
              >
                {index === current && (
                  <>
                    <div className="info">
                      <span>
                        <p>{slide.title}</p>
                      </span>
                      <h1>{slide.subtitle}</h1>
                      <p>{slide.description}</p>
                      <button>COMPRAR</button>
                    </div>
                    <div className="slide-container">
                      <div className={`image`}>
                        <Image
                          src={`http://localhost:8055/assets/${slide.imagem}`}
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

// <div
//   key={slide.id}
//   className={index === current ? "slider active" : "slider"}
// >
//   {index === current && (
//     <>
//       <div className="info">
//         <span>
//           <p>{slide.type}</p>
//         </span>
//         <hr className="divisor" />
//         <h1>{slide.title}</h1>
//         <p>{slide.description}</p>
//         <button>COMPRAR</button>
//       </div>
//       <div className="slide-container">
//         <div className={`image`}>
//           <Image
//             src={slide.image}
//             width="532"
//             height="752"
//             alt="drink"
//           />
//         </div>
//       </div>
//     </>
//   )}
// </div>;
