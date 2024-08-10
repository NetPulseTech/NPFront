import { menuList } from "@/Common/CommonInterFace";
import { Song } from "@/components/Music/MusicTypes";

export const favoriteTableData = [
  {
    active: true,
    title: "Alan Walker",
    count: "3.58",
    detail: "Faded New Song",
    time: "2,55,415",
  },
  {
    active: false,
    title: "Wiz Khalifa",
    count: "4.23",
    detail: "see you again",
    time: "1,55,415",
  },
  {
    active: false,
    title: "Justin Bieber",
    count: "2.58",
    detail: "sorry new song",
    time: "2,65,465",
  },
  {
    active: false,
    title: "Mark Ronson",
    count: "3.36",
    detail: "uptown funk",
    time: "7,55,515",
  },
  {
    active: false,
    title: "Tylor Swift",
    count: "5.58",
    detail: "blank space",
    time: "4,55,455",
  },
  {
    active: false,
    title: "Maroon",
    count: "4.58",
    detail: "girl like you",
    time: "10,141,142",
  },
];

export const favoritePlayListDropDown: menuList[] = [
  { icon: "Edit", title: "change city" },
  { icon: "Settings", title: "setting" },
];

export const dropDownData: menuList[] = [
  { icon: "Play", title: "add to playlist" },
  { icon: "Heart", title: "add to favourite" },
];

export const popularSongsList = [
  { name: "Something Just Like This", author: "chainsmoker" },
  { name: "Bom Bidi Bom", author: "Nicki Minaj" },
  { name: "Regret In Your Tears", author: "Nicki Minaj" },
  { name: "Bigger Than Me", author: "Katy Perry" },
  { name: "Into Me You See", author: "Katy Perry" },
  { name: "Girl Like You", author: "Maroon5" },
];

export const musicPlayerData: menuList[] = [
  { icon: "User", title: "see all" },
  { icon: "Search", title: "find friends" },
  { icon: "Settings", title: "settings" },
];


export   const songsList: Song[] = [
  {
    title: "New Rules",
    artist: "Dua Lipa",
    link: "http://mysound.ge/uploads/tracks/729760672_1526780201_1460816669.mp3",
    thumb: "https://a10.gaanacdn.com/images/albums/47/1908547/crop_175x175_1908547.jpg",
  },
  {
    title: "Señorita",
    artist: "Shawn Mendes, Camila Cabello",
    link: "http://mysound.ge/uploads/tracks/2135911823_315158852_1994375449.mp3",
    thumb: "https://a10.gaanacdn.com/images/albums/72/2657072/crop_175x175_2657072.jpg",
  },
  {
    title: "Wake Me Up",
    artist: "Avicii",
    link: "http://mysound.ge/uploads/tracks/1932929623_1281390459_1755572096.mp3",
    thumb: "https://i1.sndcdn.com/artworks-000143888529-4mwefu-t500x500.jpg",
  },
];