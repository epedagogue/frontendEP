import React from "react";
import "./bg.css";

export default function Contact() {
  return (
    <div className="bg">
      <h1>Contact Us</h1>
      <div className="row gy-12">
        <div className="col-lg-12">
          <div className="row gy-12">
            <div className="col-md-12">
              <div className="info-box">
                <h3>Address</h3>
                <p>E-33 2nd Floor Noida sector-3, Uttar Pradesh</p>
              </div>
            </div>
            <div class="col-md-12">
              <div className="info-box">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>9891875103</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="info-box">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p> info@epedagogue.com</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="info-box">
                <i className="bi bi-clock"></i>
                <h3>Open Hours</h3>
                <p>Monday - Saturday 09:00AM - 09:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
