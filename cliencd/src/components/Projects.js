import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../components/Data";

function Projects() {
  return (
    <>
      <div className='container'>
        <h2 className='text-center mt-2'>Projects</h2>
        <div className='card_div'>
          <div className='row d-flex justify-content-around align-items-center'>
            {data.map((project, index) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", height: "20rem" }}
                    className='mt-4 mb-4'
                  >
                    <Card.Img
                      variant='top'
                      style={{ width: "22rem", marginLeft: -13 }}
                      src={project.Image}
                    />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                      <Card.Title className='text-center'>
                        {project.projectNem}
                      </Card.Title>
                      <Button variant='primary'>
                        <a
                          href={project.demo}
                          target='_blank'
                          className='text-decoration-none text-light'
                        >
                          {" "}
                          Live Demo
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
