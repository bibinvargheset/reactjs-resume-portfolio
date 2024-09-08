import React, { useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie, FaBookOpen } from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent";
import configuration from "../../editable-stuff/config";
import "./styles.scss";

const Resume = () => {
  useEffect(() => {
    // Log the imported data to the console
    console.log("Configuration Data:", configuration);
  }, []);

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__container">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
              {configuration.workExperience && configuration.workExperience.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-sub-text-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date={item.duration}
                  iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                  icon={<MdWork />}
                  dateClassName="vertical-timeline-element-custom-date"
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.company}
                    </h4>
                    <h5 className="vertical-timeline-element-subtitle">
                      {item.location}
                    </h5>
                  </div>
                  <ul>
                    {item.responsibilities.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
              {configuration.education && configuration.education.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-sub-text-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                  icon={<FaBookOpen />} // Use FaBookOpen icon here
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.College}
                    </h4>
                    {item.university && (
                      <h5 className="vertical-timeline-element-subtitle">
                        {item.university}
                      </h5>
                    )}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;