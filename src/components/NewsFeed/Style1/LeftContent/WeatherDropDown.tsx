import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ChangeCity, Href, Setting } from "../../../../utils/constant";
import { FC, useState } from "react";
import { ButtonGroup } from "reactstrap";

const WeatherDropDown: FC = () => {
    const [showDropDown, setShowDropDown] = useState(false)
  return (
    <div className="setting-btn light-btn setting-dropdown">
      <ButtonGroup className=" custom-dropdown arrow-none dropdown-sm">
        <a className={`d-flex ${showDropDown ?" show ":""}`} href={Href}>
          <DynamicFeatherIcon iconName="Sun" className=" icon-light stroke-width-3 iw-12 ih-12" onClick={()=>setShowDropDown(!showDropDown)}/>
        </a>
        <div className={`dropdown-menu dropdown-menu-right custom-dropdown ${showDropDown ?" show ":""}`} 
          style={{position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate(-148px, 14px)'}}
        >
          <ul>
            <li>
              <a href={Href}><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>{ChangeCity}</a>
            </li>
            <li>
              <a href={Href}><DynamicFeatherIcon iconName="Settings" className="icon-font-light iw-16 ih-16"/>{Setting}</a>
            </li>
          </ul>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default WeatherDropDown;
