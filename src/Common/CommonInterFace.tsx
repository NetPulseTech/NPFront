import * as Icon from "react-feather";

export interface FeatherIconType {
  iconName: keyof typeof Icon;
  className?: string;
  onClick?: () => void;
}

export interface SvgIconCommonInterFace {
  className?: string;
  useClassName?:string
  iconName: String;
}

export interface StoriesModalProps {
  showModal: boolean;
  toggle: () => void;
}

export interface CreatePostHeaderInterFace {
  writePost: boolean;
  setShowPostButton: (val: boolean) => void;
}

export interface CommonUserHeadingProps {
  image: number;
  id:string
}

export interface DetailBoxProps {
  heading: string;
  span: string;
}

export interface CommentSectionInterFace {
  showComment: boolean;
}

export interface userDropDownDataInterFace {
  icon: "Globe" | "Users" | "User" | "Lock";
  detail: string;
}

export interface CreatePostInterface {
  icon: "Globe" | "Users" | "User";
  name: string;
}

export interface ShareModalProps {
  showModal: boolean;
  toggleModal: () => void;
}

export interface CommonGalleryModalInterFace {
  modal?: boolean;
  toggle: () => void;
}

export interface CommonVideoModalInterFace {
  modal: boolean;
  toggle: () => void;
}

export interface OptionsInputsInterFace {
  OptionsInput: string;
  setOptionInput: (data: string) => void;
}
export interface MainCommentProps {
  message: string;
  like?: number;
  id:string
}

export interface SubCommentProps {
  image: number;
  id:string
}

export interface GalleryModalInterFace {
  title: string;
  icon: "Bookmark" | "Edit" | "XSquare";
}

export interface galleryDropDownsInterFace {
  icon: "Trash2" | "Download" | "Image";
  title: string;
}
export interface CoverInterFace {
  image: number;
  title: string;
  detail: string;
  backGround?: boolean;
}

export interface menuList {
  icon: "Edit"| "Settings"| "Play"| "Heart"| "User"| "Search"| "Bookmark"| "XSquare"| "XOctagon" |"MessageSquare";
  title: string;
}
export interface CommonDropDownInterFace {
  mainIcon: "Sun" | "MoreHorizontal";
  mainClassName: string;
  menuList: menuList[];
}
export interface AlbumInterFace {
  showPhotos: boolean;
  lg?:number
  xl?:number
  setShowPhotos: (value: boolean) => void;
}

export interface DetailGalleryInterFace {
  showPhotos: boolean;
  setShowPhotos: (value: boolean) => void;
}
