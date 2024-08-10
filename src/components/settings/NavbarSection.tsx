import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Col, Nav, NavLink } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { NavBarInterFace } from "./NavBarTabContent";
import { Fragment } from "react";
import { Href } from "../../utils/constant/index";
import { navSettingData } from "@/Data/setting";
import Link from "next/link";

const NavbarSection: React.FC<NavBarInterFace> = ({activeTab,setActiveTab ,setShowSideBar,showSideBar}) => {
 
  return (
    <Col xl="3" lg="4">
      <div className={`setting-sidebar ${showSideBar ?"show ":""}`}>
        <div className="back-btn d-lg-none d-block" onClick={()=>setShowSideBar(prev=>!prev)}>
          <DynamicFeatherIcon iconName="X" className="icon-theme" />
        </div>
        <div className="user-details">
          <div className="user-img bg-size blur-up lazyloaded">
            <CustomImage
              src={`${ImagePath}/user/3.jpg`}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h5>Josephin water</h5>
          <h6>Josephin.water@gmail.com</h6>
        </div>
        <div className="tab-section">
          <Nav pills className=" flex-column">
            {navSettingData.map((data, index) => (
              <Fragment key={index}>
                {!data.navigate ? (
                  <NavLink className={` ${activeTab === index + 1 ? "active" : ""}`} onClick={()=>setActiveTab(index+1)} href={Href}>
                    <i className={`fa fa-${data.icon} me-2`} />
                    {data.title}
                  </NavLink>
                ) : (
                  <Link className="nav-link" href={data.navigate}>
                    <i className={`fas fa-${data.icon} me-2`} />
                    {data.title}
                  </Link>
                )}
              </Fragment>
            ))}
          </Nav>
        </div>
      </div>
    </Col>
  );
};

export default NavbarSection;
