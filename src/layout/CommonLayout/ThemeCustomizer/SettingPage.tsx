import { Back } from "../../../utils/constant";
import { ThemeSettingsInterFace } from "@/layout/LayoutTypes";
import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import SettingAccordion from "./SettingAccordion";

const SettingPage: FC<ThemeSettingsInterFace> = ({
  setSettingPageOpen,
  settingPageOpen,
}) => {
  return (
    <div className={`setting-box theme-scrollbar ${settingPageOpen ? "open-setting" : ""}`}>
      <div className="setting_box_body">
        <div onClick={() => setSettingPageOpen(!settingPageOpen)}>
          <div className="sidebar-back text-left">
            <FaAngleLeft className="mx-2" />
             {Back}
          </div>
        </div>
        <div className="setting-body">
          <SettingAccordion />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
