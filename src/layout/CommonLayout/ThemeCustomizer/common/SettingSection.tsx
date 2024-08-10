import { FC, useState } from "react";
import {Row,Col,Button,ButtonGroup,AccordionItem,AccordionHeader,AccordionBody} from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../../utils/constant";
import { useRouter } from "next/navigation";
interface SettingSectionInterFace {
  heading: string;
  values: { title: string; navigate: string; diffrentImage?:string }[];
  image:string
  id:string
}
const SettingSection: FC<SettingSectionInterFace> = ({ heading, values,image,id }) => {
  const router = useRouter();

  const handleNavigate = (path:string)=>{
    router.push(path);
}
  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{heading}</AccordionHeader>
      <AccordionBody accordionId={id}>
        <div className={`setting-contant`}>
          <Row className="demo-section">
            {values.map((data, index) => (
              <Col sm="6" xs="12" className="text-center demo-effects" key={index}>
                <div className="set-position">
                  <div className="layout-container bg-size blur-up lazyloaded">
                    <CustomImage src={`${ImagePath}/demo/${image}/${data.diffrentImage?data.diffrentImage:index+1}.jpg`} className="bg-img blur-up lazyload"/>
                  </div>
                  <div className="demo-text">
                    <h4>{data.title}</h4>
                    <ButtonGroup className="demo-btn" onClick={()=>handleNavigate(data.navigate)}>
                      <Button className="new-tab-btn">Preview</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default SettingSection;
