"use client";
import CommonLayoutHeader from "./CommonLayoutHeader";
import LayoutSideBar from "./LayoutSideBar";
import ConversationPanel from "./ConversationPanel";
import { Container } from "reactstrap";
import { CommonLayoutProps } from "../LayoutTypes";
import ThemeCustomizer from "./ThemeCustomizer";
import FullSideBar from "./FullSideBar";
import { useState } from "react";
import { skeltonLoaderList } from "@/Data/Layout";

const CommonLayout: React.FC<CommonLayoutProps> = ({differentLogo,loaderName="defaultLoader",showFullSideBar,children,mainClass,headerClassName,sideBarClassName,HideConversationPanel,ConversationPanelClassName}) => {const [loaderShowKey, setLoaderShowKey] = useState("defaultLoader")
  return (
    <>
      {skeltonLoaderList[loaderName]}
      <CommonLayoutHeader headerClassName={headerClassName ? headerClassName : ""} differentLogo={differentLogo}/>
      <Container fluid className={`page-body  ${mainClass ? mainClass : ""}`}>
        {showFullSideBar ? <FullSideBar /> : <LayoutSideBar sideBarClassName={sideBarClassName ? sideBarClassName : ""}/>}
        {children}
        {!HideConversationPanel && <ConversationPanel sidebarClassName={ConversationPanelClassName}  />}
      </Container>
      <ThemeCustomizer />
    </>
  );
};

export default CommonLayout;
