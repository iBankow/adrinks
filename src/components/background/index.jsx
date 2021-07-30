import { useEffect, useState } from "react";
import { Back } from "./style";

export default function Background({ home, bar, content, hiddenOverflow }) {
  const [contents, setContents] = useState("");

  useEffect(() => {
    function loadContent() {
      if (content === true) {
        setContents(null);
      } else {
        setContents(true);
      }
    }
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Back bar={contents} hiddenOverflow={hiddenOverflow}>
      {home === true ? (
        <>
          <div className="texture"></div>
          <div className="texture home"></div>
          <div className="rectangle home">
            <div className="circle2"></div>
            <div className="circle"></div>
          </div>
        </>
      ) : (
        <>
          <div className="rectangle">
            <div className="circle2"></div>
            <div className="circle"></div>
          </div>
          {bar ? (
            <div className="texture bar"></div>
          ) : (
            <div className="texture home"></div>
          )}
        </>
      )}
    </Back>
  );
}
