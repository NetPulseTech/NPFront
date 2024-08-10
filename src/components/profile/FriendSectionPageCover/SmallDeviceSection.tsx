import UserData from "@/layout/ProfileLayout/UserData";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import Image from "next/image";

const SmallDeviceSection: React.FC = () => {
  return (
    <div className="d-lg-none d-block">
      <div className="profile-box">
        <div className="profile-content">
          <div className="image-section">
            <div className="profile-img">
              <div className="bg-size blur-up lazyload">
                <CustomImage src={`${ImagePath}/user-sm/14.jpg`} className="img-fluid blur-up lazyload bg-img" alt="profile"/>
              </div>
              <span className="stats">
                <Image height={15} width={15} src={`${ImagePath}/icon/verified.png`} className="img-fluid blur-up lazyload" alt="verified"/>
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
  );
};

export default SmallDeviceSection;
