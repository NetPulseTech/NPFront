import CustomImage from "@/Common/CustomImage";
import { jobResponsibilities } from "@/Data/company";
import { ImagePath } from "../../../utils/constant";
import { Col } from "reactstrap";
const CareerDetail: React.FC = () => {
  return (
    <Col lg="9" className="order-lg-1 order-2">
      <div className="career-about">
        <h2 className="mb-4">Marketing Analyst</h2>
        <div className="career-img bg-size blur-up lazyloaded">
          <CustomImage
            src={`${ImagePath}/company.jpg`}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
        </div>
        <div className="career-content">
          <div className="content-title">
            <h5>about Company</h5>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesettingindustry. Lorem Ipsum has been the industry's standard
              dummy textever since the 1500s, when an unknown printer took a
              galley oftype and scrambled it to make a type specimen book. It
              hassurvived not only five centuries, but also the leap
              intoelectronic typesetting, remaining essentially unchanged. It
              waspopularised in the 1960s with the release of Letraset
              sheetscontaining Lorem Ipsum passages, and more recently with
              desktoppublishing software like Aldus PageMaker including versions
              ofLorem Ipsum
            </p>
            <p>
              {" "}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
            </p>
          </div>
          <div className="content-title">
            <h5>Number of positions currently vacant:</h5>
          </div>
          <div>
            <h4 className="mb-3">10</h4>
          </div>
          <div className="content-title">
            <h5>Job description:</h5>
          </div>
          <div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random
              text.It has roots in a piece of classical Latin literature from 45
              BC,making it over 2000 years old. Richard McClintock, a
              Latinprofessor at Hampden-Sydney College in Virginia, looked up
              one ofthe more obscure Latin words, consectetur, from a Lorem
              Ipsumpassage, and going through the cites of the word in
              classicalliterature, discovered the undoubtable source. Lorem
              Ipsum comesfrom sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etMalorum"
            </p>
          </div>
          <div className="content-title">
            <h5>Key job responsibilities::</h5>
          </div>
          <div>
            <ul>
              {jobResponsibilities.map((data, index) => (<li key={index}>{data}</li>))}
            </ul>
          </div>
          <div className="content-title">
            <h5>Location::</h5>
          </div>
          <div>
            <p>London, united kingdom</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CareerDetail;
