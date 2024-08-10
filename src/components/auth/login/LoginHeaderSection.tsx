import { About, Upgrade } from "../../../utils/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Href } from '../../../utils/constant/index';
import iconLogo from '../../../../public/assets/images/icon/logo.png';

const LoginHeaderSection = () => {
  return (
    <div className="header-section">
      <div className="logo-sec">
        <Link href="/newsfeed/style1">
          <Image height={46} width={147} src={iconLogo} alt="logo" className="img-fluid blur-up lazyloaded"/>
        </Link>
      </div>
      <div className="right-links">
        <ul>
          <li>
            <a href={Href}>{About}</a>
          </li>
          <li>
            <a href={Href}>{Upgrade}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginHeaderSection;
