import Body from "../../components/body/body";
import Contato from "../../components/contato/contato";
import Slide from "../../components/slide/slide";
import Slider from "../../components/slider/slider";
import { SliderData } from "../../components/data";

export default function Home({ theme }) {
  return (
    <>
      <Slide className="slide-container" slides={SliderData} />
      <Body theme={theme} />
      <Slider />
      <Contato />
    </>
  );
}
