import { Back } from "./style";
import Image from "next/image";
import texture from "../../public/assets/img/texture.svg";

export default function Background() {
  return (
    <Back>
      <div className="texture"></div>
      <div className="rectangle">
        <div className="circle2"></div>
        <div className="circle"></div>
      </div>
    </Back>
  );
}
