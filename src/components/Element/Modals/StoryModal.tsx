import { Card, CardBody, Col } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import { Href } from '../../../utils/constant/index';
import { useState } from "react";
interface StoryModalInterFace {
    tittle:string
    imagePath:string
    onClick:()=>void
}
const StoryModal = ({imagePath,tittle,onClick}:StoryModalInterFace) => {
  const [modalOpen, setModalOpen] = useState(false)

    const newOnclick =()=>{

    }
  return (
    <Col xl="3" lg="4" sm="6">
      <div className="modal-box">
        <Card>
          <div className="img-section bg-size blur-up lazyloaded">
            <CustomImage
              src={`${ImagePath}/modal-img/${imagePath}.jpg`}
            
              className="img-fluid blur-up bg-img lazyloaded"
              alt=""
            />
          </div>
          <CardBody>
            <h5 className="card-title">{tittle}</h5>
            <a href={Href} className="btn btn-solid" onClick={onClick}>
              open modal
            </a>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StoryModal;
