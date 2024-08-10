import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant";
import Link from "next/link";
import { Input } from "reactstrap";

const UserHeader = () => {
  return (
    <div className="user-header">
      <Link href="/newsfeed/style1" className="back-btn d-block d-sm-none tesetese">
        <DynamicFeatherIcon iconName="ArrowLeft" className="ih-18 iw-18 " />
      </Link>
      <div className="search-bar">
        <DynamicFeatherIcon iconName="Search" className="icon-theme icon iw-16"/>
        <Input type="text" placeholder="find friends..." />
      </div>
      <a className="new-chat" href={Href}>
        <DynamicFeatherIcon iconName="Edit" className="icon-light iw-14 ih-14"/>
      </a>
    </div>
  );
};

export default UserHeader;
