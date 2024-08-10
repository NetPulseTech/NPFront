import { Messages, Subject, Submit, SvgPath, YourName } from "../../utils/constant";
import Image from "next/image";
import { FormEvent } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { EmailAddress } from "../../utils/constant/index";

const ContactUS: React.FC = () => {
  return (
    <section className="section-pb-space help-contact">
      <Container>
        <Row>
          <Col lg="6">
            <div className="intro-part">
              <div className="title">
                <h2>don't be strange! reach us</h2>
                <p>looking for anything else? reach us by fill this form</p>
              </div>
              <div className="contact-img">
                <Image height={261} width={415} src={`${SvgPath}/help-topics/contact.svg`} className="img-fluid blur-up lazyloaded" alt=""/>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <form className="theme-form row" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault() } >
              <Col md="6" className="form-group mb-3">
                <Label>{YourName}</Label>
                <Input type="text" />
              </Col>
              <Col md="6" className=" form-group mb-3">
                <Label>{EmailAddress}</Label>
                <Input type="email" />
              </Col>
              <Col md="12" className="form-group mb-3">
                <Label>{Subject}</Label>
                <Input type="text" />
              </Col>
              <Col md="12" className="form-group mb-0">
                <Label className="d-block">{Messages}</Label>
                <Input type="textarea" rows={6} defaultValue={""} />
              </Col>
              <Col xs="12" className="mt-4 text-right">
                <Button color="solid" size="lg">
                  {Submit}
                </Button>
              </Col>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUS;
