"use client";
import React, { FC, useState } from "react";
import { Href, ImagePath } from "../../utils/constant/index";
import CustomImage from "../CustomImage";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Dropdown, DropdownMenu, DropdownToggle, Media } from "reactstrap";
import Image from "next/image";
import { yearsWiseDetails } from "@/Data/common";
import { CoverInterFace } from "../CommonInterFace";
import CommonDropDown from "../CommonDropDown";
import { dropDownData } from "@/Data/event";
import { FaArrowRight } from "react-icons/fa";

const Cover: FC<CoverInterFace> = ({ image, title, detail, backGround }) => {
  return (
    <div className={`event-cover ${!backGround ? "bg-none" : ""} `}>
      <div className="event-img bg-size blur-up lazyloaded">
        <CustomImage
          src={`${ImagePath}/cover/${image}.jpg`}
          className="img-fluid blur-up lazyload bg-img"
          alt=""
        />
        <div className="event-content">
          <h1>{title}</h1>
        </div>
        <div className="cover-img-detail">
          <span>12 dec</span>
          <h3>last added 10 songs</h3>
          <a href={Href}> view more <FaArrowRight className="fas ms-1" />
          </a>
        </div>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon
                iconName="RotateCw"
                className="icon iw-11 ih-11 icon-dark stroke-width-3"
              />
            </a>
          </div>
          <div className="setting-btn  setting-dropdown">
            <CommonDropDown mainClassName="icon-dark stroke-width-3 icon iw-11 ih-11" mainIcon="Sun" menuList={dropDownData}/>
          </div>
        </div>
      </div>
      <div className="event-timeline">
        <div className="timeline-title">
          <Media>
            <img
              src={`${ImagePath}/icon/event.png`}
              className="img-fluid blur-up lazyloaded"
              alt=""
            />
            <Media body>
              <h4>timeline</h4>
              <h6>45 total your attended events</h6>
            </Media>
          </Media>
        </div>
        <ul className="timeline-content theme-scrollbar">
          {yearsWiseDetails.map((data, index) => (
            <li key={index}>
              <h4>{data.year}</h4>
              <h6>
                {data.amount} {detail}
              </h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cover;
