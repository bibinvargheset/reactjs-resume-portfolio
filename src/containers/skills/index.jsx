import React from "react";
import { GiSkills } from "react-icons/gi"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from "rc-progress";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import configuration from "../../editable-stuff/config"; // Import configuration
import "./styles.scss";

function Skills() {
  // Extract skills from the configuration object
  const { hardSkills, softSkills, regulatorySkills, showSkills } = configuration;

  // Check if skills should be shown
  if (!showSkills) return null;

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {/* Hard Skills */}
        <div className="skills__content-wrapper__inner-content">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              Hard Skills
            </h3>
            <div>
              {hardSkills.map((skill) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity: 1", "opacity: 0"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper" key={skill.name}>
                    <p>{skill.name}</p>
                    <Line
                      percent={skill.value}
                      strokeWidth="2"
                      strokeColor="var(--selected-theme-main-color)"
                      strokeLinecap="square"
                      trailWidth="2"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </Animate>
        </div>

        {/* Soft Skills */}
        <div className="skills__content-wrapper__inner-content">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              Soft Skills
            </h3>
            <div>
              {softSkills.map((skill) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity: 1", "opacity: 0"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper" key={skill.name}>
                    <p>{skill.name}</p>
                    <Line
                      percent={skill.value}
                      strokeWidth="2"
                      strokeColor="var(--selected-theme-main-color)"
                      strokeLinecap="square"
                      trailWidth="2"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </Animate>
        </div>

        {/* Regulatory Skills */}
        <div className="skills__content-wrapper__inner-content">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              Regulatory Skills
            </h3>
            <div>
              {regulatorySkills.map((skill) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity: 1", "opacity: 0"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper" key={skill.name}>
                    <p>{skill.name}</p>
                    <Line
                      percent={skill.value}
                      strokeWidth="2"
                      strokeColor="var(--selected-theme-main-color)"
                      strokeLinecap="square"
                      trailWidth="2"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default Skills;