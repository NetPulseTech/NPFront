export interface OverlayNames {
  color?: string;
  image: number;
}

export interface ShowFriendMenuInterFace {
  icon: "User" | "Search" | "Settings";
  detail: string;
}

export interface DropDownProps {
  darkIcon?: boolean;
}

export interface LikePageInterFace {
  tittle: string;
  type: string;
  member: number;
  active: boolean;
}

export interface postDropDownOptionInterface {
  iconName: "Bookmark" | "XSquare" | "X";
  post: string;
}

export interface SufiyaElizaThirdPostInterface {
  fourthPost?: number;
  userImage: number;
  iframeLink?:string
}

export interface CommonGalleryImageProps {
  imageName: number | undefined;
  onClickHandle: () => void;
}

export interface SufiyaElizaFirstPostInterFace {
  userImage: number;
  mainImage: number;
  className?:string
}

export interface PostDetailInterFace {
  mainImage: number;
}


export interface SufiyaElizaSecondPostInterFace {
  userImage: number;
}

export interface EventsCardInterFace{
  eventImage:number
  diffrentPath?:string
}

export interface BirthdayReminderInterFace  {
  mainClass?:string

}

export interface SufiyaElizaMultiplePostInterFace {
  moreImage?:boolean
  diffrentImage?:boolean
  userImage?:number
  main:number,second:number,third:number
}

export  interface SidebarPanelInterFace {
  showSideBar: boolean;
  ref:React.RefObject<HTMLDivElement>;
}

export interface SufiyaElizaTwoPhotoPostInterFace {
  diffrentImage?:boolean
}

export interface FriendSuggestionInterFace {
  mainClassName?:string
}
export interface StorySectionProps {
  storyShow?:number 
}