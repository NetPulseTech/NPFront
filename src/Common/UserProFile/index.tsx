import { Href, ImagePath, ViewProfile } from "../../utils/constant/index";
import Link from "next/link";
import ProfileSetting from "./ProfileSetting";
import CounterStats from "./CounterStats";
import Image from "next/image";
import CustomImage from "../CustomImage";

const UserProFile = () => {
  return (
    <div className="profile-box">
      <ProfileSetting />
      <div className="profile-content">
        <Link href="/profile/timeline" className="image-section">
          <div className="profile-img">
            <div className="bg-size blur-up lazyloaded">
              <CustomImage src={`${ImagePath}/story/8.jpg`} className="img-fluid blur-up bg-img lazyloaded" alt="profile"/>
            </div>
            <span className="stats">
              <Image width={15} height={15} src={`${ImagePath}/icon/verified.png`} className="img-fluid blur-up lazyloaded" alt="verified"/>
            </span>
          </div>
        </Link>
        <div className="profile-detail">
          <Link href="/profile">
            <h2>kelin jasen <span>❤</span></h2>
          </Link>
          <h5>kelin.jasen156@gmail.com</h5>
          <div className="description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <CounterStats />
          <a href={Href} className="btn btn-solid">{ViewProfile}</a>
        </div>
      </div>
    </div>
  );
};

export default UserProFile;
