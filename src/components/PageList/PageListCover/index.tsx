import CommonDropDown from "@/Common/CommonDropDown";
import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { dropDownData } from "@/Data/Weather";
import { Href, ImagePath, ListOfPages } from "../../../utils/constant";

const PageListCover: React.FC = () => {
  return (
    <div className="event-cover light-cover">
      <div className="event-img bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/cover/8.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
        <div className="event-content">
          <h1>{ListOfPages}</h1>
        </div>
        <div className="cover-img-detail">
          <span>12 dec</span>
        </div>
        <div className="settings gap-2">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
              <CommonDropDown mainIcon="Sun" mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" menuList={dropDownData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageListCover;
