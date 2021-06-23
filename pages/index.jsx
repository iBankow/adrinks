import Header from "../components/header/header";
import Slide from "../components/slide/slide";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <Header />
      <Slide className="slide-container" slides={SliderData} />
      <div className="rectangle">
        <div className="circle2"></div>
        <div className="circle"></div>
      </div>
    </>
  );
}
