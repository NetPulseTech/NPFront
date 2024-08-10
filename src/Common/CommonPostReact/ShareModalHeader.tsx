import { FC, useState } from "react";
import {Dropdown,DropdownMenu,DropdownToggle} from "reactstrap";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Href, ShareAsPost } from "../../utils/constant";

const ShareModalHeader: FC = () => {
  const [postDropDown, setPostDropDown] = useState(false);
  const dropDownList = ["share as post","on friend's feed","in a group","share as message",];

  return (
    <div className="setting-dropdown">
      <Dropdown isOpen={postDropDown} toggle={() => setPostDropDown(!postDropDown)} className="custom-dropdown arrow-none dropdown-sm btn-group">
        <DropdownToggle color="transparent">
          <h5>
            {ShareAsPost}
            <DynamicFeatherIcon iconName="ChevronDown" className="iw-14" />
          </h5>
        </DropdownToggle>
        <DropdownMenu>
          <ul>
            {dropDownList.map((data, index) => (
              <li key={index}>
                <a href={Href}>{data}</a>
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ShareModalHeader;
