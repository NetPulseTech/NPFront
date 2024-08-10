import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Close, Href,  Messages } from "../../../utils/constant";
import RightOption from "./RightOption";
import { Input } from "reactstrap";
import UserMessage from "./UserMessage";
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const HeaderMessage: React.FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } =useOutsideDropdown(false);

  return (
    <li className="header-btn custom-dropdown dropdown-lg btn-group message-btn">
      <a className={`main-link ${isComponentVisible ? "show" : ""}`} href={Href} onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <DynamicFeatherIcon iconName="MessageCircle" className="icon-light stroke-width-3 iw-16 ih-16" />
        <span className="count success">2</span>
      </a>
      <div className={`dropdown-menu dropdown-menu-right ${isComponentVisible ? "show" : ""}`} ref={ref}>
        <div className="dropdown-header">
          <div className="left-title">
            <span>{Messages}</span>
          </div>
          <RightOption />
          <div className="mobile-close" onClick={() => setIsComponentVisible(!isComponentVisible)}>
            <h5>{Close}</h5>
          </div>
        </div>
        <div className="search-bar input-style icon-left">
          <DynamicFeatherIcon iconName="Search" className="icon iw-16 ih-16" onClick={() => setIsComponentVisible(!isComponentVisible)}/>
          <Input type="text" placeholder="search messages..." />
        </div>
        <UserMessage />
      </div>
    </li>
  );
};

export default HeaderMessage;
