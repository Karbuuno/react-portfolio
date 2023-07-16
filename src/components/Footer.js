import React from "react";
import Button from "react-bootstrap/Button";
import resume from "./assets/images/Abdishakur-cv.pdf";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='footer mt-5'>
        <div className='container footer_container d-flex justify-content-around flex-wrap'>
          <div className='first mt-5'>
            <h4>Abdishakur Gesey</h4>
            <p>@{year} Abdishakur Gesey All rights reserved</p>
            <div className='d-flex'>
              <p>
                <i className='fa-brands fa-instagram'></i>
                <i className='fa-brands fa-facebook'></i>
              </p>
            </div>
          </div>
          <div className='second mt-t'>
            <h4>Contact Me</h4>
            <p>karbuuno@gmail.com</p>
            <p>+447933484415</p>
          </div>
          <div className='third mt-5'>
            <h4>Download</h4>
            <button className='brn-resume'>
              <a href={resume} download='resume'>
                {" "}
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
