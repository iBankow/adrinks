import Body from "../../components/body/body";
import Contato from "../../components/contato/contato";
import Slide from "../../components/slide/slide";
import Slider from "../../components/slider/slider";
import { SliderData } from "../../components/data";
import { Helmet } from "react-helmet";

export default function Home({ theme }) {
  return (
    <>
      <Helmet>
        <title>a.drinks | Início</title>
      </Helmet>
      <Slide className="slide-container" slides={SliderData} />
      <Body theme={theme} />
      <Slider />
      <Contato theme={theme} />
    </>
  );
}
