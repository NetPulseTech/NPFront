//@ts-nocheck
import { AccordionDummyText } from "../../utils/constant";
import { useState } from "react";
import { Accordion, Button, Card, CardBody, CardHeader, Collapse } from "reactstrap";

const ArticleAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string | null>("1");
  const toggle = (id: string) =>
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  return (
    <Accordion open={"1"} className="theme-accordion accordion-sm">
      <Card>
        <CardHeader>
          <h2 className="mb-0">
            <Button className="btn-link btn-block text-left" onClick={() => toggle("1")}>
              Choose a new username
            </Button>
          </h2>
        </CardHeader>
        <Collapse isOpen={isOpen === "1"}>
          <CardBody>{AccordionDummyText}</CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="mb-0">
            <Button className="btn-link btn-block text-left collapsed" onClick={() => toggle("2")}>
              Check if you already have a Friendbook Account
            </Button>
          </h2>
        </CardHeader>
        <Collapse isOpen={isOpen === "2"}>
          <CardBody>{AccordionDummyText}</CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="mb-0">
            <Button className="btn-link btn-block text-left collapsed" onClick={() => toggle("3")}>
              Check where email notifications are sent
            </Button>
          </h2>
        </CardHeader>
        <Collapse isOpen={isOpen === "3"}>
          <CardBody>{AccordionDummyText}</CardBody>
        </Collapse>
      </Card>
    </Accordion>
  );
};

export default ArticleAccordion;
