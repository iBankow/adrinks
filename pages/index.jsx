/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Contato from "../components/contato/contato";
import Footer from "../components/footer/footer";
import Background from "../components/background/index";
import Slide from "../components/slide/slide";
import Slider from "../components/slider/slider";
import { SliderData } from "../components/data";

export default function Home() {
  return (
    <>
      <Header />
      <Slide className="slide-container" slides={SliderData} />
      <Body />
      <Slider />
      <Contato />
      <Footer />
      <Background home={true} />
    </>
  );
}
