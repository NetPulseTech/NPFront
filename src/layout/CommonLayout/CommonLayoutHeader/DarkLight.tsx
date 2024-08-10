import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant";
import { useState } from "react";

const DarkLight: React.FC = () => {
  const [moonlight, setMoonlight] = useState(false);

  const MoonlightToggle = (light: boolean) => {
    setMoonlight(!light);
    moonlight?document.body.classList.remove("dark"):document.body.classList.add("dark")
  
  };
  return (
    <li className="header-btn custom-dropdown" onClick={() => MoonlightToggle(moonlight)}>
      <a className="main-link" href={Href}>
        <DynamicFeatherIcon iconName={moonlight ? "Sun" : "Moon"} className="icon-light stroke-width-3 iw-16 ih-16"/>
      </a>
    </li>
  );
};

export default DarkLight;
