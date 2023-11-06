import { Container } from "@mui/material";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div id="skills">
      <Container>
        <div className={styles.skills}>
          <div className={styles.iconsSection}>
            <span className={styles.icons} title="React">
              <i className="devicon-react-original"></i>
            </span>
            <span className={styles.icons} title="TypeScript">
              <i className="devicon-typescript-plain"></i>
            </span>
            <span className={styles.icons} title="Figma">
              <i className="devicon-figma-plain"></i>
            </span>
            <span className={styles.icons} title="CSS">
              <i className="devicon-css3-plain"></i>
            </span>
            <span className={styles.icons} title="HTML">
              <i className="devicon-html5-plain"></i>
            </span>
            <span className={styles.icons} title="Python">
              <i className="devicon-python-plain"></i>
            </span>
            <span className={styles.icons} title="Java">
              <i className="devicon-java-plain"></i>
            </span>
            <span className={styles.icons} title="Redux Toolkit">
              <i className="devicon-redux-original"></i>
            </span>
            <span className={styles.icons} title="Git and Github">
              <i className="devicon-github-plain"></i>
            </span>
            <span className={styles.icons} title="Firebase">
              <i className="devicon-firebase-plain"></i>
            </span>
            <span className={styles.icons} title="JavaScript">
              <i className="devicon-javascript-plain"></i>
            </span>
            <span className={styles.icons} title="Jest">
              <i className="devicon-jest-plain"></i>
            </span>
          </div>
          <div className={styles.skillsText}>
            <h1>Skills</h1>
            <p>
              Check out a list of my skills, all of them listed here I consider
              to be capable of working with it. Certain skills were acquired
              through my college degree, others were taught in my internship,
              and the ones I have more knowledge about were a mix of college and
              internship studies, as well as self-taught study done on my free
              time.
            </p>
          </div>
          <div className={styles.blur}></div>
        </div>
      </Container>
    </div>
  );
}
