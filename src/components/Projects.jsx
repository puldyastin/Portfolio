import "./styles/Projects.css";
import img1 from "../images/projects/11.png";
import img2 from "../images/projects/22.png";
import img3 from "../images/projects/33.png";
import img4 from "../images/projects/44.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="img-flex reveal">
          <div>
            <a
              href="https://puldyastin.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} alt="" />
            </a>
          </div>
          <div className="img-info">
            <div className="img-title">
              <h4>
                No.<span>01</span>
              </h4>
              <h3>Covid-19 Tracker</h3>
            </div>

            <div className="img-desc">
              <p>
                This is my first project as a front-end developer. I create this
                Covid-19 Tracker app when i learned on how to used API to a
                website. Here's the link of public API that i used on this
                project{" "}
                <a href="https://disease.sh" target="_blank" rel="noreferrer">
                  Covid-19 API
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
              <small>Covid-19 API</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/puldyastin/puldyastin.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://puldyastin.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="img-flex reveal">
          <div className="img-info-2">
            <div className="img-title">
              <h4>
                No.<span>02</span>
              </h4>
              <h3>Fylo Landing Page</h3>
            </div>

            <div className="img-desc">
              <p>
                This is a landing page challenge from frontendmentor.io to
                practice myself to create responsive website. This challenge
                helps me to learn best practices in css. Here's the link of the
                challenge from their website.
                <a
                  href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"
                  target="_blank"
                  rel="noreferrer"
                >
                  fylo-landing-page-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/puldyastin/Fylo-Landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://festive-goldberg-678aaa.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="https://festive-goldberg-678aaa.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt="" />
            </a>
          </div>
        </div>

        <div className="img-flex reveal">
          <div>
            <a
              href="https://sharp-heyrovsky-44e00e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img3} alt="" />
            </a>
          </div>
          <div className="img-info">
            <div className="img-title">
              <h4>
                No.<span>03</span>
              </h4>
              <h3>EasyBank Landing Page</h3>
            </div>

            <div className="img-desc">
              <p>
                The frontendmentor.io website is my practicing ground to improve
                my skills and knowledge in development. This project help me and
                challenge me to create the navigation bar from scratch. Here's
                the link of the challenge from their website.
                <a
                  href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
                  target="_blank"
                  rel="noreferrer"
                >
                  easybank-landing-page-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/puldyastin/easybank-landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sharp-heyrovsky-44e00e.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-flex reveal">
          <div className="img-info-2">
            <div className="img-title">
              <h4>
                No.<span>04</span>
              </h4>
              <h3>Social Media Dashboard</h3>
            </div>

            <div className="img-desc">
              <p>
                This challenge from frontendmentor.io challenge me in
                javascript. This simple project improve my understanding about
                DOM Manipulation and implementing eventlisterner in javascript.
                Here's the link of the challenge from their website.
                <a
                  href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
                  target="_blank"
                  rel="noreferrer"
                >
                  social-media-dashboard-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/puldyastin/Social-media-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://socialllll-media-dashboard.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt">
            <a
              href="https://socialllll-media-dashboard.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;