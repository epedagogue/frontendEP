import React from "react";
import courses from "../assets/images/courses.png";
import kunika from "../assets/images/kunika.png";
import znam from "../assets/images/znam.png";
import "../App.css";

export default function Courses() {
  return (
    <div className="mb-4">
      <div className="about">
        <imgs
          className="d-block w-100"
          src={courses}
          width="100%"
          height="550px"
          alt="First"
        />
      </div>
      <div className="container mt-5 career-path">
        <h1>
          Comprehensive learning programs<br></br>
          for all students
        </h1>
        <p>
          Here is the list of hot selling courses from our experienced
          teachers.Become lifelong learners with our best teachers, engaging
          videos lessons and personalised learning journeys
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card img-fluid">
              <img className="card-img-top" src={kunika} alt="Avro" />
              <div className="card-img-overlay">
              <a href="#"><button class="btn btn-primary">Get Course
              </button></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 course-padding">
          <div className="card img-fluid">
          <img className="card-img-top" src={znam} alt="Avro" />
          <div className="card-img-overlay">
          <a href="#"><button class="btn btn-primary">Get Course
          </button></a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

