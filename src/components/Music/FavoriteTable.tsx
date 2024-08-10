import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { favoriteTableData } from "@/Data/music";
import { FC, useState } from "react";
import { Media } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { favoriteTable } from "./MusicTypes";

const FavoriteTable: FC = () => {
  const [playListTable, setPlayListTable] = useState(favoriteTableData);
  const handleFavoriteTable =(data:favoriteTable) =>{
    if (data.active) {
      const withoutActiveData = playListTable.map((item)=>item.title === data.title ? {...item,active:false}:item )
      setPlayListTable(withoutActiveData)
    }else{
      const withActiveData = playListTable.map((item)=>item.title === data.title ? {...item,active:true}:item )
      setPlayListTable(withActiveData)
    }

  }
  return (
    <table className="table">
      <tbody>
        {playListTable.map((data, index) => (
          <tr key={index}>
            <td>
              <Media>
                <div className="img-sec bg-size blur-up lazyloaded">
                  <CustomImage src={`${ImagePath}/music/${index + 1}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
                </div>
                <Media body>
                  <h5>{data.title}</h5>
                </Media>
              </Media>
            </td>
            <td><h5>{data.count}</h5></td>
            <td><h6>{data.detail}</h6></td>
            <td><h5>{data.time}</h5></td>
            <td>
              <div className={`favorite-btn ${data.active ? "active" : ""}`} onClick={()=>handleFavoriteTable(data)}>
                <DynamicFeatherIcon
                  iconName="Heart"
                  className="icon-dark iw-14 ih-14"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FavoriteTable;
