import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import {Friends,ImagePath, SeeAll} from "../../utils/constant";
import {Input,Container,Row,Media,Col} from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { friendDropDownData, friendListData } from "@/Data/profile";
import CommonDropDown from "@/Common/CommonDropDown";
import Link from "next/link";
import FriendSDropDown from "./FriendSDropDown";

const ProfileFriendList: React.FC = () => {

  return (
    <div className="friend-list-box section-t-space section-b-space">
      <div className="card-title">
        <h3>{Friends}</h3>
        <div className="right-setting">
          <div className="search-input input-style icon-right">
            <DynamicFeatherIcon className="icon-dark icon iw-16" iconName="Search"/>
            <Input type="text" placeholder="find friends..." />
          </div>
          <FriendSDropDown/>
        </div>
      </div>
      <Container fluid>
        <Row className="friend-list ">
          {friendListData.map((item, index) => (
            <Col sm="6" key={index}>
              {item.children.map((data, index2) => (
                <div className="friend-box" key={index2}>
                  <Media>
                    <Link href="profile/friend" className="user-img bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/user-sm/${data.image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
                      <span className="available-stats" />
                    </Link>
                    <Media body>
                      <Link href={"/profile/friend"}>
                        <h5 className="user-name">{data.name}</h5>
                      </Link>
                      <h6>alabma, USA</h6>
                    </Media>
                  </Media>
                  <div className="setting-btn ms-auto setting-dropdown no-bg">
                    <CommonDropDown mainClassName="icon icon-font-color iw-14" mainIcon="MoreHorizontal" menuList={friendDropDownData}/>
                  </div>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
      <div className="see-all">
        <Link  href={"/profile/friend"} className="btn btn-solid">{SeeAll}</Link>
      </div>
    </div>
  );
};

export default ProfileFriendList;
