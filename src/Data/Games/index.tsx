import { menuList } from "@/Common/CommonInterFace";

export const gameDropDownData: menuList[] = [
  { icon: "Edit", title: "change city" },
  { icon: "Settings", title: "setting" },
];



export  interface gamesTableDataInterFace  {
  active: boolean;
  gameName: string;
  type: string;
  users: string;
}

export const gamesTableData = [
  { active:true,gameName: "League of Legends", type: "Action", users: "2,55,415" },
  { active:false,gameName: "Minecraft", type: "Strategy", users: "1,55,415" },
  { active:false,gameName: "Call of Duty", type: "Adventure", users: "2,65,465" },
  { active:false,gameName: "Counter-Strike", type: "Simulation", users: "7,55,515" },
  { active:false,gameName: "Siege", type: "Sports", users: "4,55,455" },
];


export const gamesTypes = ["show all","action","adventure","Simulation","Strategy","kids"];


export const differentGameCards =[
  {image:12,type:"Simulation"},
  {image:13,type:"Simulation"},
  {image:14,type:"action"},
  {image:15,type:"adventure"},
  {image:16,type:"adventure"},
  {image:17,type:"action"},
  {image:18,type:"kids"},
  {image:19,type:"kids"},
  {image:20,type:"Simulation"},
  {image:21,type:"Strategy"},
]