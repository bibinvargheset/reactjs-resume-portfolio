import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaStackOverflow, FaHackerrank, FaKaggle } from 'react-icons/fa';
import './style.scss';
import config from "../../editable-stuff/config.js";

// Mapping icon names to their corresponding FontAwesome components
const iconMapping = {
  'fa-facebook': <FaFacebook className="socialicons" />,
  'fa-linkedin': <FaLinkedin className="socialicons" />,
  'fa-twitter': <FaTwitter className="socialicons" />,
  'fa-instagram': <FaInstagram className="socialicons" />,
  'fa-github': <FaGithub className="socialicons" />,
  'fa-stack-overflow': <FaStackOverflow className="socialicons" />,
  'fa-hackerrank': <FaHackerrank className="socialicons" />,
  'fa-kaggle': <FaKaggle className="socialicons" />
};

const Home = () => {
  const {
    FirstName,
    LastName,
    MiddleName,
    devDesc,
    icons,
      resume_header

  } = config;

  return (
    <section className='home' id='home'>
      <div className="home_text">
        <h1>{`${FirstName} ${MiddleName} ${LastName}`}</h1>
      </div>

      <h3 className="developerContent">{resume_header}</h3>
      <h2 className="devDesc" cursor={{ show: false }}>
        {devDesc}
      </h2>

      <div className="home_text_contact">
        <div className="home_text_contact_button_wrapper">
          <button>Hire me</button>
          <a href="/">Download resume</a>
        </div>

        <ul className="home_text_contact_social_wrapper">
          {icons.map((icon, index) => (
            <li key={`social-icon-${index}`}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                {iconMapping[icon.image] || <span>Icon not found</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;