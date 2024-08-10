import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const InlineTextAndAlignment = () => {
  return (
    <div className="element-card section-pb-space section-pt-space">
      <Container>
        <Row>
          <Col md="6">
            <CardHeader>
              <h4>Inline text elements</h4>
              <span>Styling for common inline HTML5 elements.</span>
            </CardHeader>
            <CardBody>
              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              <p><del>This line of text is meant to be treated as deleted text.</del></p>
              <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p><ins> This line of text is meant to be treated as an addition to the document.</ins></p>
              <p><u>This line of text will render as underlined</u></p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p><strong>This line rendered as bold text.</strong></p>
              <p><em>This line rendered as italicized text.</em> </p>
            </CardBody>
          </Col>
          <Col md="6">
            <CardHeader>
              <h4>Alignment</h4>
              <span> Use text utilities as needed to change the alignment of your blockquote.</span>
            </CardHeader>
            <CardBody>
              <p className="text-left">This is a left aligned text .text-left</p>
              <p className="text-center">This is a center aligned text .text-center</p>
              <p className="text-right">This is a right aligned text .text-right</p>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InlineTextAndAlignment;
