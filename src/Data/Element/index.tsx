import {
  ClimaConMoon,
  ClimaSun,
  CloudDrizzle,
  CloudDrizzleMoon,
  CloudLightningfill,
  CloudSun,
  ConsiderableClouds,
  Wind,
} from "../Weather/Svg";

export const weatherIconsList = [
  { name: "cloud Drizzle", icon: <CloudDrizzle /> },
  { name: "cloud lightning", icon: <CloudLightningfill /> },
  { name: "cloud moon", icon: <ConsiderableClouds /> },
  { name: "cloud sun", icon: <CloudSun /> },
  { name: "moon", icon: <ClimaConMoon /> },
  { name: "moon Drizzle", icon: <CloudDrizzleMoon /> },
  { name: "sun", icon: <ClimaSun /> },
  { name: "wind", icon: <Wind /> },
];
