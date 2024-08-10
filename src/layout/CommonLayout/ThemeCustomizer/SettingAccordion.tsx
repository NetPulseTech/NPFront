//@ts-nocheck

import  { FC, useState } from "react";
import { Accordion } from 'reactstrap';
import { companyPagesData, elementPagesData, favouritePagesData, newsFeedLayoutData, otherPagesData, profilePagesData } from "@/Data/Layout";
import SettingSection from "./common/SettingSection";

const SettingAccordion: FC = () => {
  const [open, setOpen] = useState('');
  const toggle = (id:string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  return (
    <Accordion open={open} toggle={toggle}>
      <SettingSection heading="Newsfeed layout"  values={newsFeedLayoutData} image="newsfeed" id="1" />
      <SettingSection heading="Profile pages"  values={profilePagesData} image="profile" id="2" />
      <SettingSection heading="Favourite pages"  values={favouritePagesData} image="favourite" id="3" />
      <SettingSection heading="Other pages"  values={otherPagesData} image="other" id="4" />
      <SettingSection heading="Company pages"  values={companyPagesData} image="company" id="5" />
      <SettingSection heading="Element pages"  values={elementPagesData} image="element" id="6" />
    </Accordion>
  );
};

export default SettingAccordion;
