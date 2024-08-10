import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import UserData from "@/layout/ProfileLayout/UserData";
import Image from "next/image";
import SmallDeviceSection from "./SmallDeviceSection";
const FriendSectionPageCover: React.FC = () => {
  return (
    <>
      <div className="profile-cover bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/cover/2.jpg`} className="img-fluid blur-up lazyload bg-img" alt="cover"/>
        <div className="profile-box d-lg-block d-none friend-profile">
          <div className="profile-content">
            <div className="image-section">
              <div className="profile-img">
                <div className="bg-size blur-up lazyloaded">
                  <CustomImage src={`${ImagePath}/user-sm/14.jpg`} className="img-fluid blur-up lazyload bg-img" alt="profile"/>
                </div>
                <span className="stats">
                  <Image width={15} height={15} src={`${ImagePath}/icon/verified.png`} className="img-fluid blur-up lazyloaded" alt="verified"/>
                </span>
              </div>
            </div>
            <div className="profile-detail">
              <h2>
                kelin jasen <span>❤</span>
              </h2>
              <h5>kelin.jasen156@gmail.com</h5>
              <UserData />
            </div>
          </div>
        </div>
      </div>

      <SmallDeviceSection />
    </>
  );
};

export default FriendSectionPageCover;
