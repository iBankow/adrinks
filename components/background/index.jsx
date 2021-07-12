import { Back } from "./style";

export default function Background({ home, bar }) {
  return (
    <Back>
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
          {bar ? (
            <div className="texture"></div>
          ) : (
            <div className="texture home"></div>
          )}
          <div className="rectangle">
            <div className="circle2"></div>
            <div className="circle"></div>
          </div>
        </>
      )}
    </Back>
  );
}
