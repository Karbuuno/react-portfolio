import React from "react";
import profilePicture from "../assets/images/karbuno.jpg";

function About() {
  return (
    <div
      className='container mb3 about_container'
      style={{ minHeight: "100%" }}
    >
      <div className='container main_container d-flex justify-content-around flex-wrap'>
        <div className='left_container mt-5' style={{ width: 500 }}>
          <h2>Meet Abdishkur Gesey</h2>
          <p>
            Hello! I'm a passionate and dedicated junior full stack developer.
            With a solid foundation in front-end technologies like HTML, CSS,
            and JavaScript, as well as back-end frameworks like Node.js and
            Express, I possess the skills to create dynamic and user-friendly
            web applications. I enjoy the challenge of working on both the
            client-side and server-side, crafting seamless experiences for
            users. As a junior developer, I am committed to continuous learning,
            always eager to explore new technologies and frameworks to enhance
            my skill set. I thrive in collaborative environments, where I can
            contribute my problem-solving skills and work alongside experienced
            professionals. I'm excited to be a part of impactful projects,
            leveraging my creativity and adaptability to deliver efficient and
            innovative solutions. Let's build something amazing together!.
          </p>
        </div>
        <div className='right_container mt-3'>
          <img src={profilePicture} alt='Gesey' />
        </div>
      </div>
    </div>
  );
}

export default About;
