import React from "react";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import config from "../../editable-stuff/config.js";  // Import configuration
import "./styles.scss";

function About() {
  const {
    FirstName,
    LastName,
    resume_header,
    devDesc,
    Age,
    Address,
    Email,
    Contact_No,
    profilePictureLink,
    aboutDescription
  } = config;

  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText={config.aboutHeading}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">{resume_header}</h3>
            <p>{aboutDescription}</p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              <li>
                <span className="title">Name</span>
                <span className="value">{`${FirstName} ${LastName}`}</span>
              </li>
              <li>
                <span className="title">Age</span>
                <span className="value">{Age}</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">{Address}</span>
              </li>
              <li>
                <span className="title">Email</span>
                <span className="value">{Email}</span>
              </li>
              <li>
                <span className="title">Contact No</span>
                <span className="value">{Contact_No}</span>
              </li>
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <FaDev color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <FaDatabase color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <DiAndroid color="var(--selected-theme-main-color)" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;