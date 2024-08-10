import * as Icon from "react-feather";
import { FeatherIconType } from "./CommonInterFace";

const DynamicFeatherIcon: React.FC<FeatherIconType> = ({iconName,className,onClick}) => {
  const IconComp = Icon[iconName];
  return <IconComp className={className} onClick={onClick} />;
};

export default DynamicFeatherIcon;
