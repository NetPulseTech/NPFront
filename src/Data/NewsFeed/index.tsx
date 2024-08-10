import { SeeAll, Settings } from "../../utils/constant";
import {
  ShowFriendMenuInterFace,
  postDropDownOptionInterface,
} from "@/components/NewsFeed/Style1/Style1Types";
import { FindFriends } from "../../utils/constant/index";
import { menuList } from "../../Common/CommonInterFace";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";

export const overlayName = [
  { color: "orange", image: 6 },
  { color: "pink", image: 2 },
  { color: "skin", image: 1 },
  { color: "yellow", image: 3 },
  { color: "skin", image: 5 },
  { color: "pink", image: 4 },
  { color: "blue", image: 7 },
  { image: 8 },
];

export const showFriendMenuData: ShowFriendMenuInterFace[] = [
  { icon: "User", detail: SeeAll },
  { icon: "Search", detail: FindFriends },
  { icon: "Settings", detail: Settings },
];

export const friendSuggestionSlider = [
  { className: "pink", image: 2 },
  { className: "blue", image: 7 },
  { className: "skin", image: 1 },
];

export const friendSuggestionSliderSetting = {
  slidesToShow: 2,
  infinite: true,
  slidesToScroll: 1,
  speed: 500,
};

export const likePageListContentData = [
  {
    tittle: "chrimson agency",
    type: "clothing store",
    member: 15,
    active: false,
  },
  {
    tittle: "Digital Pixel",
    type: "Software Company",
    member: 158,
    active: false,
  },
  {
    tittle: "The Angle Bar",
    type: "Disco Bar",
    member: 8,
    active: true,
  },
  {
    tittle: "Fivestar Food",
    type: "Restaurant",
    member: 186,
    active: false,
  },
  {
    tittle: "Royal Watch",
    type: "Watch Shop",
    member: 65,
    active: false,
  },
];

export const postDropDownOption: postDropDownOptionInterface[] = [
  { iconName: "Bookmark", post: "save post" },
  { iconName: "XSquare", post: "hide post" },
  { iconName: "X", post: "unfollow sufiya" },
];

export const friendSuggestionSettings = {
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
};

export const galleryData = [
  { imageName: 1, sizeSmall: "4" },
  { imageName: 2, sizeSmall: "4" },
  { imageName: 3, sizeSmall: "4" },
  { row: true },
  { imageName: 5, className: "pt-cls", sizeSmall: "8" },
];

export const gemixStoreDroDown: menuList[] = [
  { icon: "Bookmark", title: "save post" },
  { icon: "XSquare", title: "hide post" },
  { icon: "XOctagon", title: "unfollow sufiya" },
];

export const styleOneMoreComponent = [
  <SufiyaElizaThirdPost fourthPost={2} userImage={1} />,
  <SufiyaElizaSecondPost userImage={1} />,
];

export const styleTwoMoreComponent = [
  <SufiyaElizaSecondPost userImage={1} />
];
