import { FC } from "react";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Input } from "reactstrap";
import { Href } from "../../utils/constant";
import { feelings, friendsNames } from "@/Data/common";
import { OptionsInputsInterFace } from "../CommonInterFace";

const OptionsInputs: FC<OptionsInputsInterFace> = ({OptionsInput,setOptionInput}) => {
  return (
    <div className={`options-input ${OptionsInput}`}>
      <a href={Href}>
        <DynamicFeatherIcon iconName="X" className="iw-15 icon-font-light icon-close" onClick={() => setOptionInput("")}/>
      </a>
      <div className="search-input feeling-input">
        <Input type="text" className="enable" placeholder="How Are You Feeling?" list="feelings"/>
        <datalist id="feelings">{feelings.map((data, index) => (<option value={data} key={index} />))}</datalist>
        <a href={Href}>
          <DynamicFeatherIcon iconName="Smile" className="iw-15 icon-left icon-font-light"/>
        </a>
      </div>
      <div className="search-input place-input">
        <Input type="text" placeholder="search for places..." />
        <a href={Href}>
          <DynamicFeatherIcon iconName="Smile" className="iw-15 icon-left icon-font-light"/>
          <DynamicFeatherIcon iconName="MapPin" className="iw-15 icon-left icon-font-light"/>
        </a>
      </div>
      <div className="search-input friend-input">
        <Input type="text" placeholder="search your friends..." list="Friends" />
        <datalist id="Friends">{friendsNames.map((data,index)=><option key={index} value={data} />)}</datalist>
        <a href={Href}>
          <DynamicFeatherIcon iconName="MapPin" className="iw-15 icon-left icon-font-light"/>
          <DynamicFeatherIcon iconName="Tag" className="iw-15 icon-left icon-font-light"/>
        </a>
      </div>
    </div>
  );
};

export default OptionsInputs;
