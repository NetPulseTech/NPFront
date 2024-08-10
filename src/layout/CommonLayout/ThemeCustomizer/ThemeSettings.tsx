import { FC, useState } from "react";
import { Dark, Href, LTR, Pages, RTL } from "../../../utils/constant/index";
import { ThemeSettingsInterFace } from "@/layout/LayoutTypes";

const ThemeSettings: FC<ThemeSettingsInterFace> = ({setSettingPageOpen,settingPageOpen}) => {
  const [rtlButton, setRtlButton] = useState(RTL);
  const [moonlight, setMoonlight] = useState(false);
  const handleRtl = (rtl: string) => {
    if (rtl === RTL) {
      setRtlButton(LTR);
      document.body.classList.add("rtl")
    }else{
      setRtlButton(RTL);
      document.body.classList.remove('rtl');
    }

  };
  const MoonlightToggle = (light: boolean) => {
    setMoonlight(!light);
    moonlight?document.body.classList.remove("dark"):document.body.classList.add("dark")
  
  };
  return (
    <div className="theme-settings">
      <div className="rtl-btn" onClick={() => handleRtl(rtlButton)}>
        <div className="theme-layout-version">{rtlButton}</div>
      </div>
      <div className="rtl-btn h-cls" onClick={() => MoonlightToggle(moonlight)}>
        <div className="dark-button">{moonlight ?"Light":"Dark"}</div>
      </div>
      <div
        className="pages"
        onClick={() => setSettingPageOpen(!settingPageOpen)}
      >
        <a href={Href}>
          <div className="theme-setting-sidebar" id="setting-icon">
            <div>{Pages}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThemeSettings;
