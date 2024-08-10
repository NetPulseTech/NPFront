import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import {Followers,Following,Friends,ImagePath,Likes,ViewProfile} from "../../utils/constant";
import { Container, Input } from "reactstrap";
import FriendSDropDown from "./FriendSDropDown";
import CustomImage from "@/Common/CustomImage";
import Image from "next/image";
import Link from "next/link";

const FriendListBox: React.FC = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="friend-list-box section-b-space">
      <div className="card-title">
        <h3>{Friends}</h3>
        <div className="right-setting">
          <div className="search-input input-style icon-right">
            <DynamicFeatherIcon
              iconName="Search"
              className="icon-dark icon iw-16"
            />
            <Input type="text" placeholder="find friends..." />
          </div>
          <FriendSDropDown />
        </div>
      </div>
      <Container fluid>
        <div className="friend-list friend-page-list">
          <ul>
            {numbers.map((data) => (
              <li key={data}>
                <div className="profile-box friend-box">
                  <div className="profile-content">
                    <div className="image-section">
                      <div className="profile-img">
                        <div className="bg-size blur-up lazyloaded">
                          <CustomImage src={`${ImagePath}/user-sm/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="profile"/>
                        </div>
                        <span className="stats">
                          <Image src={`${ImagePath}/icon/verified.png`} width={15} height={15} className="img-fluid blur-up lazyloaded" alt="verified"/>
                        </span>
                      </div>
                    </div>
                    <div className="profile-detail">
                      <h2> kelin jasen <span>❤</span></h2>
                      <h5>kelin.jasen156@gmail.com</h5>
                      <div className="counter-stats">
                        <ul>
                          <li><h3 className="counter-value">546</h3><h5>{Following}</h5></li>
                          <li><h3 className="counter-value">26335</h3><h5>{Likes}</h5></li>
                          <li><h3 className="counter-value">6845</h3><h5>{Followers}</h5></li>
                        </ul>
                      </div>
                      <Link href="/profile/friend" className="btn btn-outline">{ViewProfile}</Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FriendListBox;
