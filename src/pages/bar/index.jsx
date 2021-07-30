import { useEffect } from "react";
import Body from "../../components/body/body";
import Slider from "../../components/slider/slider";

import GlobalStyle from "../../styles/global";

export default function Bar({ theme, setLocation }) {
  useEffect(() => {
    setLocation("bar");
  });

  return (
    <>
      <Body theme={theme} bar={true} />
      <Slider />
      <GlobalStyle />
    </>
  );
}
