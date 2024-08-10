import { FC } from "react";
import { About, Href } from "../../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { aboutContentData } from "@/Data/Favorite";
import Link from "next/link";

const AboutCard: FC = () => {
  return (
    <div className="profile-about pages-about">
      <div className="card-title">
        <h3>{About}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
        </div>
      </div>
      <div className="about-content">
        <ul>
          {aboutContentData.map((data, index) => (
            <li key={index}>
              <div className="details">
                <h4>{data.heading}</h4>
                <h6>
                  {data.detail ? (data.detail) : (<Link  href="/">www.netpulse.com</Link>)}
                </h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
