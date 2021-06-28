import { Back } from "./style";

export default function Background({ home }) {
  return (
    <Back>
      {home === true ? (
        <>
          <div className="texture home"></div>
          <div className="rectangle home">
            <div className="circle2"></div>
            <div className="circle"></div>
          </div>
        </>
      ) : (
        <>
          <div className="texture home"></div>
          <div className="rectangle">
            <div className="circle2"></div>
            <div className="circle"></div>
          </div>
        </>
      )}
    </Back>
  );
}
