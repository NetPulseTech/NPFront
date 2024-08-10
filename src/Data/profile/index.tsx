import { menuList } from "@/Common/CommonInterFace";

export const socialMediaDetail = [
  { icon: "facebook", className: "fb" },
  { icon: "twitter", className: "tw" },
  { icon: "whatsapp", className: "wa" },
];
interface AboutUserInterFace {
  icon?: "Briefcase" | "Heart" | "MapPin";
  description: string;
  time: string;
  iconName?: string;
}
export const aboutUser: AboutUserInterFace[] = [
  {
    icon: "Briefcase",
    description: "UX desginer at google",
    time: "banglore - 2019",
  },
  {
    iconName: "degree",
    description: "UX desginer at google",
    time: "banglore - 2019",
  },
  { icon: "Heart", description: "relationship status", time: "single" },
  { icon: "MapPin", description: "lived in london", time: "last 5 year" },
  { iconName: "blood-drop", description: "blood group", time: "A+ positive" },
];

export const collageDropDown: menuList[] = [
  { icon: "Edit", title: "edit profile" },
  { icon: "User", title: "view profile" },
];

export const activityFeedData: menuList[] = [
  { icon: "Edit", title: "see all" },
  { icon: "Search", title: "find page" },
  { icon: "Settings", title: "Settings" },
];

export const activityFeedList = [
  {
    title: "Bill Yerds commented on",
    spanText: "Anna sthesia's",
    time: "5 mins ago",
  },
  {
    title: "Bill Yerds liked",
    spanText: "Paige Turner's",
    time: "15 mins ago",
  },
  {
    title: "Bill Yerds reacted on",
    spanText: "Paul Molive's",
    time: "1 day ago",
  },
  {
    title: "Bill Yerds commented on",
    spanText: "Anna Mull's",
    time: "1 day ago",
  },
  {
    title: "Bill Yerds commented on",
    spanText: "Anna sthesia's",
    time: "2 day ago",
  },
];

export const worldWideTrendData = [
  { name: "CitizenshipAmendmentBill2019", post: 15 },
  { name: "BestFriend", post: 574 },
  { name: "loveYourSelf", post: 125 },
  { name: "planWalkEvent", post: 105 },
];
interface AboutContentInterFace {
  icon?:
    | "User"
    | "Phone"
    | "User"
    | "Heart"
    | "MapPin"
    | "Mail"
    | "AtSign"
    | "Link";
  iconName?: string;
  heading: string;
  details: string;
}
export const aboutContentData: AboutContentInterFace[] = [
  {
    icon: "User",
    heading: "About",
    details:
      " Hello, I’m a kelin jasen, web-developer based on Paris. I have rich experience in web site design.",
  },
  { iconName: "cake", heading: "Birthday", details: "27th Aug, 1994" },
  { icon: "Phone", heading: "Phone", details: "041 985 245 210" },
  { icon: "User", heading: "gender", details: "men" },
  { icon: "Heart", heading: "relationship status", details: "single" },
  { icon: "MapPin", heading: "lived in london", details: "last 5 year" },
  { iconName: "blood-drop", heading: "blood group", details: "A+ positive" },
  { icon: "Mail", heading: "email address", details: "billyerds@gmail.com" },
  { icon: "AtSign", heading: "website", details: "netpulse.com" },
  { icon: "Link", heading: "join", details: "june 20, 2010" },
];

export const hobbiesAndInterest = [
  {
    title: "hobbies :",
    details:
      "In my spare time, I enjoy going to the gym and regularly partake in charity runs around the UK in order to help the community and to stay fit and healthy. I also enjoy keeping up to date with the current affairs, both national and international events, which helps me to get inspiration for the stories that I produce when I am working",
  },
  {
    title: "Favourite Movies :",
    details:
      "the pursuit of happiness, forrest gump, inception, the prestige, searching, coco, toy story, harry potter, parasite,the sixth sense, shutter island ",
  },
  {
    title: "favourite books :",
    details:
      "the monk who have sold his ferrari, who will cry when you die, the alchemist, 5 AM club, the power of subconsious mind, the old man and his  ",
  },
  {
    title: "favourite games :",
    details:
      "assassin's creed valhalla, minecraft, story about my uncle, cyberpunk 2077, the last of us part ii, pubg, call of duty warzone, fortnite, rainbow six siege",
  },
  {
    title: "Favourite Bands / Artists:",
    details:
      "Talking Heads, Carl Perkins, Iron Maiden, one direction, the police, onerepublic, the cure",
  },
  {
    title: "Favourite series :",
    details:
      "breaking bad, stranger things, money heist, lost in space, find yourself, 13 Reasons Why, Ozark , Black Mirror, The Witcher, Riverdale, The Crown ",
  },
  {
    title: "other interest :",
    details:
      "Sports, Blogging, Volunteering, Traveling, Yoga, Strategic Gaming ",
  },
];

export const educationWorkData = [
  {
    title: "Junior Architect :",
    details: "Lopez & Zhang Architects, San Diego, CA / August 2018—present",
  },
  {
    title: "Architect intern:",
    details: "Goldberg & Richards, Los Angeles, CA / August 2015—August 2018",
  },
  {
    title: "Master of Architecture :",
    details: "Woodbury Univercity, 2013-2015",
  },
  {
    title: "bachlor of architecture:",
    details: "Woodbury Univercity, 2009-2013",
  },
];
export const friendListData = [
  {
    rowNumber: 1,
    children: [
      { name: "Paige Turner", image: 1 },
      { name: "Josephin Water ", image: 2 },
      { name: "Petey Cruiser", image: 3 },
    ],
  },
  {
    rowNumber: 2,
    children: [
      { name: "Anna Sthesia", image: 4 },
      { name: "Anna Mull", image: 5 },
      { name: "Paul Molive", image: 6 },
    ],
  },
];

export const friendDropDownData: menuList[] = [
  { icon: "User", title: "view profile" },
  { icon: "MessageSquare", title: "Message" },
  { icon: "XOctagon", title: "unfollow sufiya " },
];

export const activityFeedDropDown: menuList[] = [
  { icon: "Edit", title: "see all" },
  { icon: "Search", title: "find page" },
  { icon: "Settings", title: "Settings" },
];

export const activityFeedsData = [
  {
    day: "today",
    children: [
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "5 mins ago",
      },
      {
        title: "Bill Yerds liked",
        spanText: "Paige Turner's",
        time: "15 mins ago",
      },
      {
        title: "Bill Yerds reacted on",
        spanText: "Paul Molive's",
        time: "30 mins ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna Mull's",
        time: "5 hrs ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "8 hrs ago",
      },
    ],
  },
  {
    day: "Yesterday",
    children: [
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "5 mins ago",
      },
      {
        title: "Bill Yerds liked",
        spanText: "Paige Turner's",
        time: "15 mins ago",
      },
      {
        title: "Bill Yerds reacted on",
        spanText: "Paul Molive's",
        time: "30 mins ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna Mull's",
        time: "5 hrs ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "8 hrs ago",
      },
    ],
  },
  {
    day: "Month June",
    children: [
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "5 mins ago",
      },
      {
        title: "Bill Yerds liked",
        spanText: "Paige Turner's",
        time: "15 mins ago",
      },
      {
        title: "Bill Yerds reacted on",
        spanText: "Paul Molive's",
        time: "30 mins ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna Mull's",
        time: "5 hrs ago",
      },
      {
        title: "Bill Yerds commented on",
        spanText: "Anna sthesia's",
        time: "8 hrs ago",
      },
    ],
  },
];

interface profileNavData {
  icon: "Clock" | "Info" | "Users" | "Image" | "List";
  title: string;
}

export const profileNav: profileNavData[] = [
  { title: "timeline", icon: "Clock" },
  { title: "about", icon: "Info" },
  { title: "friends", icon: "Users" },
  { title: "photos", icon: "Image" },
  { title: "activity feed", icon: "List" },
];