import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Input } from "reactstrap";
import { RecentSearch } from "../../../utils/constant";
import FriendList from "./FriendList";
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const SearchBox: React.FC = () => {
  const {isComponentVisible,ref,setIsComponentVisible} =useOutsideDropdown(false)
  return (
    <div ref={ref} className={`search-box ${isComponentVisible ? "show" : ""}`}>
      <DynamicFeatherIcon iconName="Search" className="icon iw-16 icon-light" />
      <Input type="text" className="search-type" placeholder="find friends..." onClick={() => setIsComponentVisible(true)}/>
      <div className="icon-close">
        <DynamicFeatherIcon iconName="X" className="iw-16 icon-light" onClick={() => setIsComponentVisible(false)}/>
      </div>
      <div className="search-suggestion">
        <span className="recent">{RecentSearch}</span>
        <FriendList />
      </div>
    </div>
  );
};

export default SearchBox;
