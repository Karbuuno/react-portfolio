import React from "react";

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
            <h4>Get in Touch</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>karbuuno@gmail.com</p>
            <p>+447933484415</p>
          </div>
          <div className='third mt-5'>
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
