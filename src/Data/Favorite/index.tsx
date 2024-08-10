import { ApexOptions } from 'apexcharts';
import { ProfileMenusDetails } from "@/components/Favorite/Favorite";

export const socialDetails = [
  { number: 56, detail: "follow" },
  { number: 954, detail: "follower" },
  { number: 968, detail: "likes" },
  { number: "036", detail: "post" },
];

export const profileMenusDetails: ProfileMenusDetails[] = [
  { icon: "Clock", tittle: "home" },
  { icon: "Info", tittle: "about" },
  { icon: "MessageCircle", tittle: "reviews" },
  { icon: "Image", tittle: "photos" },
];

export const aboutContentData = [
  { heading: "page info", detail: "created on 10 march 2018" },
  {
    heading: "about us",
    detail:
      " We dance because there’s no greater feeling in the world than moving a piece of music and letting the rest of the world disappear.",
  },
  {
    heading: "mission",
    detail: ` " Practice like you’re in last. Perform like you’ve already won."`,
  },
  { heading: "website" },
];

export const hobbiesAndInterestData = [
  {
    heading: "overview :",
    detail:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur voluptate, autem asperiores facilis ea voluptatibus nisi deleniti repudiandae! Ut autem facere eius sed quis quidem explicabo assumenda placeat voluptatem.",
  },
  {
    heading: "Mission :",
    detail:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur voluptate, autem asperiores facilis ea voluptatibus nisi deleniti repudiandae! Ut autem facere eius sed quis quidem explicabo assumenda placeat voluptatem.",
  },
  { heading: "Timings :", detail: "Mon to Sat: 8 to 10" },
  { heading: "Service :", detail: "learn all types of dance" },
  { heading: "Website :", detail: "danceacadamy.com" },
  { heading: "Email :", detail: "billyerds@gmail.com" },
  { heading: "Phone No :", detail: "041 985 245 210" },
];

export const ratingNumbers = [
  { value: 75, rating: 5 },
  { value: 70, rating: 4 },
  { value: 55, rating: 3 },
  { value: 30, rating: 2 },
  { value: 10, rating: 1 },
];

export const chartOptions:ApexOptions = {
  series: [44, 55, 13],
  chart: {
    width: 320,
    type: "pie",
  },
  legend: {
    position: "bottom",
  },
  colors: ["#0389c9", "#385cb4", "#fe4653"],
  labels: ["Positive", "Negative", "Natural"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "left",
        },
      },
    },
    {
      breakpoint: 1199,
      options: {
        legend: {
          position: "right",
        },
      },
    },
    {
      breakpoint: 1461,
      options: {
        chart: {
          width: 280,
        },
      },
    },
  ],
};

interface datas {
  icon: "Clock" | "Info" | "MessageCircle" | "Image";
  name: string;
}
export const favouritePageTabs: datas[] = [
  { icon: "Clock", name: "home" },
  { icon: "Info", name: "about" },
  { icon: "MessageCircle", name: "reviews" },
  { icon: "Image", name: "photos" },
];
