import React from "react";
import myTeam from "../assets/images/myTeam.jpg";
import kunika from "../assets/images/kunika.png";
import znam from "../assets/images/znam.png";
import lakshay from "../assets/images/lakshay.png";
import sandhiyaaa from "../assets/images/sandhiyaaa.png";
import rupendra from "../assets/images/rupendra.png";
import ram from "../assets/images/ram.png";

export default function Myteam() {
  return (
    <div className="mb-4">
      <div className="about">
        <img
          className="d-block w-100 img-fluid"
          src={myTeam}
          width="100%"
          height="550px"
          alt="First"
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top" src={kunika} alt="Card image cap" />
              <div className="card-body">
                <h5 class="card-title">Teacher</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 course-padding">
            <div className="card">
              <img className="card-img-top" src={znam} alt="Card image cap" />
              <div className="card-body">
                <h5 class="card-title">Teacher</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={rupendra}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 class="card-title">Teacher</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 course-padding">
            <div className="card">
              <img
                className="card-img-top"
                src={lakshay}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 class="card-title">Video Editor</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={sandhiyaaa}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 class="card-title">Video Editor</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 course-padding">
            <div className="card">
              <img className="card-img-top" src={ram} alt="Card image cap" />
              <div className="card-body">
                <h5 class="card-title">Social Media Excecutive</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

