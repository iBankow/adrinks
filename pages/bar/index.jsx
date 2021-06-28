import Header from "../../components/header/header";
import Body from "../../components/body/body";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";
export default function Bar() {
  return (
    <>
      <Header />
      <Body />
      <Slider />
      <Footer />
      <Background home={false} />
    </>
  );
}
