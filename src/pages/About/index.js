
import clsx from "clsx";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import myImage from '../../images/myImage.jpg'

function About({ id }) {
  return (
    <div id={id} className={clsx(styles.About)}>
      <div clsx={clsx(styles.titleSubject)}>
        <h1 className={clsx(styles.titleText)}>My Document</h1>
      </div>
      <div className={clsx(styles.underline)}></div>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.header)}>
          <div className={clsx(styles.name, styles.titleFormatCenter)}>Doan Hoang Kim</div>
          <div className={clsx(styles.positionApply, styles.titleFormatCenter)}>Frontend Developer</div>
        </div>

        <div className={clsx(styles.contact, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Contact information</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.subject, 'd-flex')}>
                <div className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={clsx(styles.titleContent)}>
                  Phone
                </div>
              </div>
              <div className={clsx(styles.detailedContent)}>
                (84) 967718190
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.subject, 'd-flex')}>
                <div className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={clsx(styles.titleContent)}>
                  Email
                </div>
              </div>
              <div className={clsx(styles.detailedContent)}>
                hoangkim.work99@gmail.com
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.subject, 'd-flex')}>
                <div className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className={clsx(styles.titleContent)}>
                  Facebook
                </div>
              </div>
              <div className={clsx(styles.detailedContent)}>
                https://www.facebook.com/kim99.doan/
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.subject, 'd-flex')}>
                <div className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faPhoneSquare} />
                </div>
                <div className={clsx(styles.titleContent)}>
                  Zalo
                </div>
              </div>
              <div className={clsx(styles.detailedContent)}>
                0967718190 / 0767108684
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.subject, 'd-flex')}>
                <div className={clsx(styles.icon)}>
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className={clsx(styles.titleContent)}>
                  Github
                </div>
              </div>
              <div className={clsx(styles.detailedContent)}>
                https://github.com/hoangkim58
              </div>
            </div>


          </div>
          <div className={clsx(styles.indentifierContact)}>
            <img
              className={clsx(styles.indentifierImage)}
              src={myImage}
            />
          </div>
        </div>

        <div className={clsx(styles.skill, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Skill</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Programming Languages
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Library
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Tools
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Databases
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.education, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Education</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                2017 - 2022
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.certification, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Certification</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                TOEIC
              </div>
              <div className={clsx(styles.detailedContent)}>
                Score: 500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
