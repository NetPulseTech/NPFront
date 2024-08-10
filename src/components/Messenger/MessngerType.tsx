import { Dispatch, SetStateAction } from "react";
interface messengerInterFace {
  receiverMessage?: string;
  senderMessage?: string;
}
export interface SingleUser {
  id: number;
  userName: string;
  lastMessage: string;
  count?: number;
  messenger: messengerInterFace[];
}

export interface ChatUsersInterFace {
  userList: SingleUser[];
  setActiveTab: Dispatch<SetStateAction<number>>;
  activeTab: number;
}

export interface ChatContentInterFace {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  userList: SingleUser | null;
  setUserList: Dispatch<SetStateAction<SingleUser[]>>;
}

export interface CommonChatBoxInterFace {
  setActiveTab: Dispatch<SetStateAction<number>>;
  userList: SingleUser | null;
  setUserList: Dispatch<SetStateAction<SingleUser[]>>;
}

export interface UserChatInterFace {
  setActiveTab?: Dispatch<SetStateAction<number>>;
  setUserList: Dispatch<SetStateAction<SingleUser[]>>;
  user: SingleUser | null;
}

export interface TempObj {
  receiverMessage: string;
  senderMessage: string;
}
