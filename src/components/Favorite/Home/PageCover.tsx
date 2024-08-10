import { FC } from "react";
import CustomImage from "@/Common/CustomImage";
import { ImagePath, Href, Follow, SendMessage } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { socialDetails } from "@/Data/Favorite";
import Image from "next/image";
import SocialButtons from "./SocialButtons";

const PageCover: FC = () => {
  return (
    <div className="page-cover">
      <div className="cover-img bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/cover/3.jpg`} className="img-fluid blur-up lazyload bg-img" alt="cover"/>
        <div className="cover-btns">
          <a href={Href} className="btn btn-solid"> <DynamicFeatherIcon iconName="UserPlus" className="iw-18 ih-18" /> {Follow}</a>
          <a href={Href} className="btn btn-solid">
            <DynamicFeatherIcon iconName="MessageSquare" className="iw-18 ih-18"/>{SendMessage}
          </a>
        </div>
      </div>
      <div className="cover-content">
        <div className="page-logo">
          <a href={Href} className="bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/pages-logo/6.png`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
          </a>
        </div>
        <a href={Href} className="page-name">
          <h4>dance acadamy</h4>
          <h6>danceacadamy@gmail.com</h6>
        </a>
        <div className="page-stats">
          <ul>
            {socialDetails.map((data, index) => (
              <li key={index}>
                <h2>{data.number}</h2>
                <h6>{data.detail}</h6>
              </li>
            ))}
            <li>
              <h2>
                <Image width={32} height={19} src={`${ImagePath}/flag.jpg`} alt="image" className="img-fluid blur-up lazyloaded"/>
              </h2>
              <h6>usa</h6>
            </li>
          </ul>
        </div>
        <SocialButtons />
      </div>
    </div>
  );
};

export default PageCover;
