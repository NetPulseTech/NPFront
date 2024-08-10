import SvgIconCommon from "@/Common/SvgIconCommon";
import { FC } from "react";

const SocialButtons: FC = () => {
  const socialButton = [
    {link:"https://www.facebook.com/",name:"facebook",},
    {link:"https://twitter.com/x",name:"twitter",},
    {link:"https://web.whatsapp.com/",name:"whatsapp",},
    {link:"https://www.instagram.com/accounts/login/?hl=en",name:"instagram",},
    {link:"https://www.youtube.com/",name:"youtube"},
  ];
  return (
    <div className="social-btn">
      <ul>
        {socialButton.map((data, index) => (
          <li className={data.name} key={index}>
            <a href={data.link} target="_blank">
              <SvgIconCommon iconName={data.name} />
              <h6>{data.name}</h6>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialButtons;
