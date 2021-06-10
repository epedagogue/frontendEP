import React from "react";
import "../App.css";
import "../custome.css";
import "font-awesome/css/font-awesome.min.css";

export default function About() {
  return (
    <div className="mb-4">
      <h2 className="mt-4 san">About Us</h2>
      <div className="container ">
        <div className="row mt-4 text-justify bg-color card">
          <div className="col-md-12">
            <h3 className="card-title mt-4">Dedication</h3>
            <hr></hr>
            <p>
              Perhaps the most obvious of characteristics, but a good teacher is
              dedicated to their work and educating their students.A dedicated
              teacher not only has a passion for their job and loves to teach,
              but also consistently works to make their classroom a better place
              for all.
            </p>

            <h3 className="card-title">Professional</h3>
            <hr></hr>
            <p>
              Being a professional teacher means being knowledgeable and
              enthusiastic about one's materials, creating a supportive and
              respectful classroom environment, building authentic relationships
              with and advocating for students, being organized and planning
              ahead, remaining open to new ideas and continuing to learn.
            </p>

            <h3 className="card-title">Committed</h3>
            <hr></hr>
            <p>
              Committed teachers are characterized by their commitment to
              achievement of their students.Committed teachers are concerned
              with the development of their students and they deeply struggle
              how to keep students'learning.
            </p>

            <h3 className="card-title">Honesty</h3>
            <hr></hr>
            <p>
              The definition of HONESTY is the quality or fact of being
              truthful, sincere, and fair. Honesty requires several other
              character traits such as good judgment, responsibility, loyalty,
              and courage.
            </p>
            <h3 className="card-title">Creative</h3>
            <hr></hr>
            <p>
              Creative teaching skills are about working towards the genesis of
              something unique, both within and outside of the learner.
              Creativity is the heart of the motivational classroom. It empowers
              students and teachers to express ideas and opinions in unique
              ways.
            </p>
            <h3 className="card-title">Efficient</h3>
            <hr></hr>
            <p>
              The efficient teacher knows how to cut through red tape and does
              his/her job regardless of any outside circumstance that may
              interfere with student learning. The efficient teacher is
              concerned with teaching and takes responsibility for the academic
              success of his or her students.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="middle">
          <a className="btn" href="https://www.facebook.com/epedagogue">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="btn" href="https://twitter.com/e_pedagogue">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn" href="https://youtube.com/c/ePedagogue">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="btn" href="https://instagram.com/officialepedagogue">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn" href="https://www.linkedin.com/company/epedagogue">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
