import { FC } from "react";
import { SvgIconCommonInterFace } from "./CommonInterFace";

const SvgIconCommon: FC<SvgIconCommonInterFace> = ({ className, iconName ,useClassName }) => {
  return (
    <svg className={className ? className : ""}>
      <use className={useClassName ?useClassName:""} xlinkHref={`/assets/svg/icons.svg#${iconName}`} />
    </svg>
  );
};

export default SvgIconCommon;
