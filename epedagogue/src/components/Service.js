import React from "react";
import pic3 from "../assets/images/pic3.jpg";
import qa from "../assets/images/qa.png";
import edu from "../assets/images/edu.png";
import web from "../assets/images/web.png";
import ecom from "../assets/images/ITS.png";
import sm from "../assets/images/sm.png";
import "./bg.css";

export default function Service() {
  return (
    <div className="mb-4 bg">
      <div className="about">
        <img
          className="d-block w-100 img-fluid"
          src={pic3}
          width="100%"
          height="550px"
          alt="First"
        />
      </div>
      <div className="main-content text-center">
        <h3 className="mt-3">WHAT WE DO OFFER</h3>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 mt-3">
            <h2>E-Eductaion</h2>
            <p className="mt-5 text-justify">
              Digtial education is a boon for the remote areas where there is
              scarcity of Insfrasctructure, Resources, Teaching staff and
              favourable condition. We all are admited to ensure interactive
              digital classroom study for students at their palm. High-class
              infrastructure, Interactive 3 dimensional illustrations, and a
              lucid way of teaching will be provided along will the well-updated
              test series.
            </p>
          </div>

          <div className="col-md-5">
            <div className="card">
              <img className="card-img-top" src={edu} alt="Card cap" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img className="card-img-top" src={web} alt="Card cap" />
            </div>
          </div>
          <div className="col-md-7 mt-3 order-first order-md-2">
            <h2>Web Development</h2>
            <p className="mt-5 text-justify">
              Web development is the planning and execution of putting up useful
              information on the internet. The first and most effective part of
              web development is developing a website. An attractive web design,
              cogent content development, effective client liaison, skilled
              scripting knowledge, web servers and network security
              configuration together add up to the building of a valuable
              website.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 mt-3">
            <h2>E-Commerce Solutions</h2>
            <p className="mt-5 text-justify">
              We provide end-to-end e-Business, B2B, and eCommerce solutions for
              different market verticals to help clients excel in the digital
              marketplace.
            </p>
          </div>

          <div className="col-md-5">
            <div className="card">
              <img className="card-img-top" src={ecom} alt="Card cap" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img className="card-img-top" src={qa} alt="Card cap" />
            </div>
          </div>
          <div className="col-md-7 mt-3 order-first order-md-2">
            <h2>Quality Assurance & Testing</h2>
            <p className="mt-5 text-justify">
              Quality assurance & Testing of the product is an essential
              business process. We deliver enterprises the kind of products to
              match their high standards and brand image. Whether you need
              testing on mobile, web or for personalized solutions, we hand pick
              our highly competitive software engineers and quality analysts
              with best matching expertise for real-time collaboration to work
              in complete sync with your project needs, delivering you
              well-tested applications.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 mt-3">
            <h2>Social Networking</h2>
            <p className="mt-5 text-justify">
              ePedagogue provides social media marketing for small businesses,
              enterprises and multiple-location companies. Our social media
              marketing experts can assist you with your campaign.
            </p>
          </div>

          <div className="col-md-5">
            <div className="card">
              <img className="card-img-top" src={sm} alt="Card cap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
