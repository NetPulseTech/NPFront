import { FC } from "react";
import { Href } from "../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const LogoutIcon: FC = () => {
  return (
    <div className="main-icon">
      <a href={Href}>
        <DynamicFeatherIcon iconName="Power" className="bar-icon" />
      </a>
    </div>
  );
};

export default LogoutIcon;
