import { FC } from "react";
import { HorizontalSidebarInterFace } from "../LayoutTypes";
import { Container } from "reactstrap";
import BrandLogo from "../CommonLayout/CommonLayoutHeader/BrandLogo";
import SearchBox from "../CommonLayout/CommonLayoutHeader/SearchBox";
import RightSection from "./RightSection";
import HeaderCenter from "./HeaderCenter";
import ThemeCustomizer from "../CommonLayout/ThemeCustomizer";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from '../../utils/constant/index';
import { skeltonLoaderList } from "@/Data/Layout";

const HorizontalSidebar: FC<HorizontalSidebarInterFace> = ({children,toggleMenu,toggleSideBar,loaderName="defaultLoader"}) => {
  return (
    <>
    {skeltonLoaderList[loaderName]}
      <header className={`${!toggleMenu ? "header-menu" : ""}`}>
        <div className="mobile-fix-menu" />
        <Container fluid className="custom-padding">
          <div className="header-section">
            <div className="header-left">
              {toggleMenu && (
                <a href={Href} className="nav-sidebar me-3 d-flex" onClick={toggleSideBar}>
                  <DynamicFeatherIcon iconName="Menu" className="icon-light stroke-width-3 iw-16 ih-16"/>
                </a>
              )}
              <BrandLogo />
              <SearchBox />
            </div>
            {!toggleMenu && <HeaderCenter />}
            <RightSection />
          </div>
        </Container>
      </header>
      {children}
      <ThemeCustomizer />
    </>
  );
};

export default HorizontalSidebar;
