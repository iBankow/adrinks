import Carousel from "react-elastic-carousel";
import Image from "next/image";

export default function Slider({ slides }) {
  return (
    <Carousel itemPadding={[0, 20]} itemsToShow={2} outerSpacing={100}>
      {slides.map((slide) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Image
            key={slide.id}
            src={slide.image}
            width="53"
            height="75"
            alt="drink"
          />
        );
      })}
    </Carousel>
  );
}
