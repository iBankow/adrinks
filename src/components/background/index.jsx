import { useState } from "react";
import { Back } from "./style";

export default function Background({ handleLocation, hiddenOverflow }) {
  const [contents] = useState(() => {
    return handleLocation === "bar" ? true : null;
  });

  return (
    <Back bar={contents} handleLocation={handleLocation}>
      {handleLocation === "home" ? (
        <>
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
          {handleLocation === "bar" ? (
            <div className="texture bar"></div>
          ) : (
            <div className="texture home"></div>
          )}
        </>
      )}
    </Back>
  );
}
