import { Card, Container } from "react-bootstrap";

import TutorialCarousel3 from "../../../../images/Tutorial-Graphic_Web-04.png";
import TutorialCarousel2 from "../../../../images/Ayman_Sadiq.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../../../CSS/Tutorial-page/Tutorial.css";
import { Link } from "react-router-dom";
export const SliderTutorial = () => {
  return (
    <>
      <div className="tbg-img">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="mt-3"></div>
                  </div>

                  <div className="col-lg-12 order-2 order-lg-2 header-img">
                    <Container
                      className="d-flex align-items-center justify-content-center"
                      style={{ minHeight: "100vh" }}
                    >
                      <div className="st w-100" style={{ maxWidth: "750px", backgroundColor:"black" }}>
                        <Card className="stIn-bg">
                          <Card.Body>
                            <Carousel bg-black>
                              <Carousel.Item>
                                <img className="d-block"
                                  src={TutorialCarousel3}
                                  alt="First slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block "
                                  src={TutorialCarousel2}
                                  alt="Second slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block "
                                  src={TutorialCarousel3}
                                  alt="Third slide"
                                />
                              </Carousel.Item>
                            </Carousel>
                            
                          </Card.Body>
                          <Link to="/login"><button className="skip mb-3">Skip</button></Link>
                        </Card>
                       
                      </div>
                      
                    </Container>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SliderTutorial;