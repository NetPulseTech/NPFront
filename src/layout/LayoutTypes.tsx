import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserMenuDataInterFace {
  navigate: string;
  icon: "User" | "Settings" | "HelpCircle";
  heading: string;
  headingDetail: string;
}

export interface SideBarDataInterFace {
  path?: string;
  title?: string;
  tooltipTittle?: string;
  icon: "File" | "Star" | "User" | "Headphones" | "Cloud" | "Calendar";
}

export interface sideBarDataType {
  path: string;
  title?: string;
  tooltipTittle?: string;
  icon: "File" | "Star" | "User" | "Headphones" | "Cloud" | "Calendar";
}
export interface HorizontalSidebarInterFace {
  children?: ReactNode;
  toggleMenu?: boolean;
  toggleSideBar?: () => void;
  loaderName?:string
}
export interface CommonLayoutProps {
  mainClass?: string;
  children: ReactNode;
  headerClassName?: string;
  sideBarClassName?: string;
  showFullSideBar?: boolean;
  HideConversationPanel?: boolean;
  ConversationPanelClassName?: string;
  loaderName?:string
  differentLogo?:string
}

export interface CommonLayoutHeaderInterFace {
  headerClassName: string;
  differentLogo?: string;
}
export interface CommonLayoutSideBarInterFace {
  sideBarClassName: string;
}
export interface FavoriteLayoutProps {
  children: ReactNode;
  FavoriteTabs?:ReactNode
  loaderName:string
}

export interface NotificationListsProps {
  setShowNotification: Dispatch<SetStateAction<boolean>>;
}

export interface CommonHeaderInterface {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  heading: string;
}

export interface DataInterFace {
  target: string;
  imageName: number;
  name: string;
}
export interface CommonPopoverInterFace {
  data: DataInterFace;
}

export interface ThemeSettingsInterFace {
  settingPageOpen?: boolean;
  setSettingPageOpen: (val: boolean) => void;
}

export interface SingleData {
  id: number;
  name: string;
  image: string;
  message: string[];
}

export interface ConversationPanelInterFace {
  sidebarClassName: string | undefined;
}
export interface ProfileLayoutInterFace {
  children: ReactNode;
  title?: string;
  profileTab?:boolean
  loaderName:string
}

export interface ProfileMenuInterFace {
  title: string;
}

export interface ModalInterFace {
  isOpen: boolean;
  updateBackGround?:boolean
  toggle: () => void;
}
export interface UserProfileInterFace {
  toggle: () => void;
}

export interface TabPaneInterFace {
  handleImageUrl: (val: string) => void;
}

export interface SinglePhotosInterFace {
  showPhotos: boolean;
  setShowPhotos: (value: boolean) => void;
  handleImageUrl: (value: string) => void;
}

export interface UserDropDownInterFace {
  dropDownOpen: boolean;
  toggleDropDown: () => void;
}

export interface CompanyLayoutInterFace{
  children:ReactNode
  title:string
  activeNav?:string
} 

export interface  CompanyHomeSectionInterFace {
  title:string
}

export interface CompanyHeaderInterFace {
  activeNav?:string
}

export interface LoadingLoaderProps {
  show?: boolean;
}

export interface commonInterFace {
  closeFriendsData: SingleData[];
  recentChats?:boolean;
}

export interface HoverMessageProps {imagePath:string,name:string,target: string;placement: "right"|"top";}