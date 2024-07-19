import "@/styles/cyber.css";
import Image from "next/image";
const CyberSecurity = () => {
  return (
    <div className="cyberContainer">
      <div className="cyberBackdrop">
        <div className="cyberHead">
          <h2>Cyber Security</h2>
        </div>
      </div>
      <div className="cyberImage">
        <img src="/images/cybersecurity.jpg" alt="" />
      </div>
      <div className="cardContainer">
        <div className="cyberCard">
          <p>
            A vulnerability is a weakness in the design, implementation,
            operation, or internal control of a computer or system. Most of the
            vulnerabilities that have been discovered are documented in the
            Common Vulnerability and Exposures (CVE) database. An exploitable
            vulnerability is one for which at least one working attack or
            exploit exists. Vulnerabilities can be researched,
            reverse-engineered, hunted, or exploited using automated tools or
            customized script.
          </p>
        </div>
      </div>
      <div className="cyberManage">
        <div className="cyberManageCon">
          <div className="manageHead">
            <p>
              To manage the information security culture, five steps should be
              taken: pre-evaluation, strategic planning, operative planning,
              implementation, and post-evaluation.
            </p>
          </div>
          <div className="dot-list">
            <ul>
              <li>
                Pre-evaluation: To identify the awareness of information
                security within employees and to analyze the current security
                policies.
              </li>
              <li>
                Strategic planning: To come up with a better awareness program,
                clear targets need to be set. Assembling a team of skilled
                professionals is helpful to achieve it.
              </li>
              <li>
                Operative planning: A good security culture can be established
                based on internal communication, management buy-in, security
                awareness and a training program.
              </li>
              <li>
                Implementation: Four stages should be used to implement the
                information security culture. They are:
              </li>
            </ul>
            <ol>
              <li>Commitment of the management</li>
              <li>Communication with organizational members</li>
              <li>Courses for all organizational members</li>
              <li>Commitment of the employees</li>
            </ol>
            <ul>
              <li>
                Post-evaluation: To assess the success of the planning and
                implementation, and to identify unresolved areas of concern.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cyberLearn">
        <div className="cyberLearnCon">
          <div className="cyberLearnHead">
            <p>
            What you’ll learn here is..
            </p>
          </div>
          <div className="dot-list"></div>
          <ul>
            <li>
              Summarize the main purpose of cyber security as a discipline
            </li>
            <li>
              Summarize the basics of identification and authentication in cyber
              security
            </li>
            <li>Explain the pros and cons of security through obscurity</li>
            <li>
              Develop a lifelong learning plan for potential careers in cyber
              security
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
