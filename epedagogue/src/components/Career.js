import React from "react";
import careers from "../assets/images/careers.png";
import teacher from "../assets/images/teacher.png";
import videid from "../assets/images/videid.png";
import digMar from "../assets/images/digMar.png";
import coding from "../assets/images/coding.png";
import "../App.css";
import Zoom from "react-reveal/Zoom";

export default function Career() {
  return (
    <div className="mb-4">
      <div className="about">
        <img
          className="d-block w-100 img-fluid"
          src={careers}
          width="100%"
          height="550px"
          alt="First"
        />
      </div>
      <Zoom>
        <div className="container mt-5 career-path">
          <h1>
            Discover The Path<br></br> Where Passion Follows
          </h1>
          <hr></hr>
          <p>
            Our team is growing fast. We come to work with energy and
            enthusiasm, we know how meaningful our work is to our clients, their
            customers and mobile industry. We’re working tirelessly to make the
            next century better than the last. If you are passionate about your
            work and want to be a part of a dynamic company, we are the right
            place to be in.
          </p>
        </div>
      </Zoom>
      <Zoom>
        <div className="container mt-5 career">
          <h1>Open Positions</h1>
          <p>
            Here is the list of open positions that we are currently hiring. You
            can follow us on Linkedin to receive job updates.
          </p>
          <div className="linkedIn-btn">
            <a
              className="btn"
              href="https://www.linkedin.com/company/epedagogue"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={teacher}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 class="card-title">Teacher</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 course-padding">
              <div className="card">
                <img
                  className="card-img-top"
                  src={videid}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 class="card-title">Video Editing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 course-padding">
              <div className="card">
                <img
                  className="card-img-top"
                  src={digMar}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 class="card-title">Digital Marketing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 course-padding">
              <div className="card">
                <img
                  className="card-img-top"
                  src={coding}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 class="card-title">IT Professional</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 mail-info">
          <h3>
            Drop us mail at{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="blue"
              class="bi bi-envelope-open-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
            </svg>
            <br></br> info@epedagogue.com
          </h3>
        </div>
      </Zoom>
    </div>
  );
}
