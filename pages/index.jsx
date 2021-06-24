import Header from "../components/header/header";
import Body from "../components/body/body";
import Background from "../components/background/index";
import Slide from "../components/slide/slide";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <Header />
      <Slide className="slide-container" slides={SliderData} />
      <Body />
      <Background />
    </>
  );
}
