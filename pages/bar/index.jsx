import Header from "../../components/header/header";
import Body from "../../components/body/body";
import Contato from "../../components/contato/contato";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";
export default function Bar() {
  return (
    <>
      <Header />
      <Body />
      <Contato />
      <Footer />
      <Background home={false} />
    </>
  );
}
