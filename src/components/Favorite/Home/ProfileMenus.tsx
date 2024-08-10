import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FC } from "react";
import { Input } from "reactstrap";
import { profileMenusDetails } from "@/Data/Favorite";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Link from "next/link";

const ProfileMenus: FC = () => {
   const { queryValue } = useSelector((state: RootState) => state.favouritePageSlice);

  return (
    <div className="profile-menu section-t-space">
      <ul>
        {profileMenusDetails.map((data,index) => (
          <li key={index} className={`${data.tittle === queryValue ?" active":""}`}>
            <Link href={`/favourite/${data.tittle}`}>
              <DynamicFeatherIcon
                iconName={data.icon}
                className="iw-14 ih-14"
              />
              <h6>{data.tittle}</h6>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="right-menu d-xl-flex d-none">
        <li>
          <div className="search-bar input-style icon-left search-inmenu">
            <DynamicFeatherIcon
              iconName="Search"
              className="iw-16 ih-16 icon icon-theme"
            />
            <Input type="text" placeholder="search here..." />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenus;
