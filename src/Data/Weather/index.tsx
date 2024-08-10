import { menuList } from "@/Common/CommonInterFace";
import {CloudDrizzle,CloudSun,ConsiderableClouds,CloudLightning,ClimaConMoon,ClimaSun,Wind} from "./Svg";

export const dropDownData: menuList[] = [
  { icon: "Edit", title: "Edit profile" },
  { icon: "User", title: "view profile" },
];

export const weatherCoverData = [
  { temperature: "22", imageName: "02", time: 5 },
  { temperature: "20", imageName: "08", time: 6 },
  { temperature: "18", imageName: "18", time: 7 },
  { temperature: "22", imageName: "27", time: 8 },
  { temperature: "25", imageName: "11", time: 9 },
  { temperature: "26", imageName: "02", time: 10 },
];

export const headerDropDownData: menuList[] = [
  { icon: "Edit", title: "change city" },
  { icon: "Settings", title: "Settings" },
];

export const weatherForCastData = [
  { detail: "Considerable clouds", icon: <ConsiderableClouds /> },
  { detail: "Some sun with a stray t-storm", icon: <CloudSun /> },
  { detail: "Partly sunny with a t-storm", icon: <CloudDrizzle /> },
  { detail: "A stray morning thunderstorm", icon: <CloudLightning /> },
  { detail: "Cloudy with showers around", icon: <ClimaConMoon /> },
  { detail: "Cloudy, a couple of t-storms", icon: <ClimaSun /> },
  { detail: "Mostly cloudy with a t-storm", icon: <Wind /> },
];
