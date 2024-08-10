import { Container } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import Image from "next/image";

const SubScribeSection: React.FC = () => {
  return (
    <section>
      <Container fluid className="p-0">
        <div className="app-section bg-size blur-up lazyloaded">
          <CustomImage
            src={`${ImagePath}/breadcrumb.jpg`}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
          <div className="app-content">
            <h2>Download netpulse app now</h2>
            <div className="app-buttons">
              <a href={Href}>
                <img src={`${ImagePath}/app-btns/app-store.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
              </a>
              <a href={Href}>
                <img src={`${ImagePath}/app-btns/play-store.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubScribeSection;
