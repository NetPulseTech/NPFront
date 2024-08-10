//@ts-nocheck

import { FaqText } from "../../utils/constant";
import { useState } from "react";
import { Accordion, Button, Card, CardHeader, Collapse } from "reactstrap";

const FaqAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string | null>("1");
  const toggle = (id: string) =>
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  const numbers = ["1", "2", "3", "4", "5"];
  return (
    <Accordion open={"1"} className="theme-accordion">
      {numbers.map((data, index) => (
        <Card key={index}>
          <CardHeader>
            <h2 className="mb-0">
              <Button
                className="btn-link btn-block text-left"
                onClick={() => toggle(data)}
              >
                Collapsible Group Item #{data}
              </Button>
            </h2>
          </CardHeader>
          <Collapse isOpen={isOpen === data}>
            <div className="card-body">{FaqText}</div>
          </Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
