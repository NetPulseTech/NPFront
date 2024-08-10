"use client";
import CommonGalleryModal from "@/Common/CommonGalleryModal";
import ShareModal from "@/Common/CommonPostReact/ShareModal";
import CustomImage from "@/Common/CustomImage";
import CommonVideoModal from "@/Common/Modals/CommonVideoModal";
import StoriesModal from "@/Common/StoriesModal";
import { Href, ImagePath } from "../../../utils/constant";
import CompanyLayout from "@/layout/CompanyLayout";
import EditCoverModal from "@/layout/ProfileLayout/EditCoverModal";
import UpdateImageModal from "@/layout/ProfileLayout/UpdateImageModal";
import { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Modal = () => {
  const [showModalKey,setShowModalKey]=useState("")
  const modalClose=()=>{
    setShowModalKey("")
  }

  let modals:{ [key: string]: React.ReactElement } = {
    modal1: <StoriesModal showModal toggle={modalClose} />,
    modal2: <ShareModal showModal toggleModal={modalClose} />,
    modal3: <CommonGalleryModal modal toggle={modalClose} />,
    modal4: <CommonVideoModal modal toggle={modalClose}/>,
    modal5: <EditCoverModal isOpen toggle={modalClose} />,
    modal6: <UpdateImageModal isOpen toggle={modalClose} />,
  };
  const data = [
    { image: "story",  tittle: "story modal" },
    { image: "share",  tittle: "Share post modal" },
    { image: "gallery",  tittle: "Gallery/Post Modal" },
    { image: "video",  tittle: "Video View Modal" },
    { image: "edit",  tittle: "Edit profile Modal" },
    { image: "choose",  tittle: "choose Photo Modal" },
  ];
  return (
    <CompanyLayout title="Modal">
      <section className="element-modal section-pt-space section-pb-space ratio2_3">
        <Container>
          <Row>
            {data.map((item, index) => (
              <Col xl="3" lg="4" sm="6" key={index}>
                <div className="modal-box">
                  <Card>
                    <div className="img-section bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/modal-img/${item.image}.jpg`} className="img-fluid blur-up bg-img lazyloaded" alt=""/>
                    </div>
                    <CardBody>
                      <h5 className="card-title">{item.tittle}</h5>
                      <a href={Href} className="btn btn-solid" onClick={() => setShowModalKey(`modal${index+1}`)}>open modal</a>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {modals[showModalKey]}
      </section>
    </CompanyLayout>
  );
};

export default Modal;
