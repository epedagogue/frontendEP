import React from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../assets/images/bg1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.png";
import ITS from "../assets/images/ITS.png";
import Zoom from "react-reveal/Zoom";
import "./home.css";
import Particles from "react-tsparticles";

export default function Home() {
  return (
    <div className="mb-4 home">
      <Zoom>
        <Carousel className="myCarousel">
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={bg1}
              width="100%"
              height="550px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mw-100 img-fluid"
              src={bg2}
              width="100%"
              height="550px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={bg3}
              width="100%"
              height="550px"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Zoom>

      <Zoom>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 mt-3 ttx">
              <h2>Welcome to ePedagogue</h2>
              <p className="mt-5 text-justify">
                We are the community of enthusiastic creative minds committed to
                revolutionizing the current methodology of Education, Digital
                solutions, Entrepreneurship, Skill nurturing add uplifting the
                impoverished. According to the IAMAI report Approx 40%
                population is living below the poverty line, illiteracy rate is
                more than 25-30% and digital literacy is almost no-existent
                among more than 90% of India's population, Our mission is to
                empower the last underprivileged in remote areas.
              </p>
            </div>

            <div className="col-md-5">
              <div className="card">
                <img className="card-img-top imgx" src={bg4} alt="Card cap" />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <img className="card-img-top imgx2" src={pic2} alt="Card cap" />
              </div>
            </div>
            <div className="col-md-7 mt-3 ttx2 order-first order-md-2">
              <h2>Digital Education Solution</h2>
              <p className="mt-5 text-justify">
                Our education system in India is only limited to classroom
                study, The multidimensional domain of education is trapped into
                smalls classrooms and monotonous books. We are committed to
                provide interactive digital classroom study for students at
                their palm. High-class infrastructure, Interactive 3 dimensional
                illustrations, and a lucid way of teaching will be provided
                along will the well-updated test series.
              </p>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 mt-3 ttx3">
              <h2>Information technology Solutions</h2>
              <p className="mt-5 text-justify">
                Currently, the technological usage is limited up to the elite
                society but we believe that the technology has significate if
                its use can benefit the common citizens that’s why we are
                committed to the dissolution of technological monopoly. We have
                the finest IT squad which deals in Web Development, App
                development, SEO, E-commerce development, and in all other IT
                solutions. We provide the best cost effective solution within
                the deadline.
              </p>
            </div>

            <div className="col-md-5">
              <div className="card">
                <img className="card-img-top imgx3" src={ITS} alt="Card cap" />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
