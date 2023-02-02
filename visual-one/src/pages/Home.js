import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import submit from "../assets/images/submit.png";
import consult from "../assets/images/consultation.png";
import marketing from "../assets/images/marketing.png";

const Home = () => {
  return (
    <>
    <MDBCarousel showControls showIndicators className="rounded-5 shadow-4-strong">
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://mdbootstrap.com/img/new/slides/041.jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/new/slides/042.jpg"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/new/slides/043.jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>

    {/* Start of way to begin process */}
    <MDBContainer className="mt-5 mb-5">
        <h2 className="mt-3 mb-5 d-flex align-items-center justify-content-center">Get Your Campaign In 3 Steps</h2>
        <MDBRow className="d-flex flex-row ">
            <MDBCol className="d-flex align-items-center ms-5">
                <img
                    src={submit}
                    className='img-fluid rounded' 
                    style={{width: "200px", height: "200px"}}
                    alt='submit icon'
                />
                <p className=" ms-5 fs-4"><span className="fs-4 fw-bolder">1.</span> Submit a request for your customized propsal.</p>
            </MDBCol>
        </MDBRow>
        <MDBRow className="flex-row mt-4 border-top border-3 border-warning">
            <MDBCol className="d-flex align-items-center me-5 mt-4">
                <p className=" ms-5 fs-4"><span className="fs-4 fw-bolder">2.</span> Recieve your no obligation call to discuss your needs and how we can tailor a proposal that will directly meet your goals.</p>
                <img
                    src={consult}
                    className='img-fluid rounded' 
                    style={{width: "200px", height: "200px"}}
                    alt='consultation icon'
                />
            </MDBCol>
        </MDBRow>
        <MDBRow className="flex-row mt-4 border-top border-3 border-warning">
            <MDBCol className="d-flex align-items-center ms-5 mt-4">
                <img
                    src={marketing}
                    className='img-fluid rounded' 
                    style={{width: "200px", height: "200px"}}
                    alt='marketing icon'
                />
                <p className=" ms-5 fs-4"><span className="fs-4 fw-bolder">3.</span> Have your unique marketing plan delivered to you, outlining how we can build key brand awareness and take your content to a higher level.</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>

    {/* start testimonial section */}
    <MDBContainer className="mt-5 mb-5 border-top text-center">
        <h2 className="mt-3 mb-5 d-flex align-items-center justify-content-center">Testimonials</h2>
        <MDBRow className="d-flex">
            <MDBCol className="d-flex flex-column align-items-center justify-content-center border-end border-2 border-dark">
                <div>
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                        className='img-fluid img-thumbnail rounded-circle' style={{width: "200px", height: "200px"}}
                        alt=''
                    />
                </div>
                <div className="d-flex align-items-center mt-3">
                  <p className="fst-italic fw-bold">Name, Title & Company</p>  
                </div>
                <div className="d-flex align-items-center mt-1">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget fringilla dolor. Donec et metus nec purus lacinia fringilla vel eu velit"</p>  
                </div>
            </MDBCol>
            <MDBCol className="d-flex flex-column align-items-center justify-content-center border-end border-2 border-dark">
                <div>
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                        className='img-fluid img-thumbnail rounded-circle' style={{width: "200px", height: "200px"}}
                        alt=''
                    />
                </div>
                <div className="d-flex align-items-center mt-3">
                  <p className="fst-italic fw-bold">Name, Title & Company</p>  
                </div>
                <div className="d-flex align-items-center mt-1">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget fringilla dolor. Donec et metus nec purus lacinia fringilla vel eu velit"</p>  
                </div>
            </MDBCol>
            <MDBCol className="d-flex flex-column align-items-center justify-content-center border-2 border-dark">
                <div>
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                        className='img-fluid img-thumbnail rounded-circle' style={{width: "200px", height: "200px"}}
                        alt=''
                    />
                </div>
                <div className="d-flex align-items-center mt-3">
                  <p className="fst-italic fw-bold">Name, Title & Company</p>  
                </div>
                <div className="d-flex align-items-center mt-1">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget fringilla dolor. Donec et metus nec purus lacinia fringilla vel eu velit"</p>  
                </div>
            </MDBCol>
        </MDBRow>
       
        
    </MDBContainer>
    </>
  );
};

export default Home;
