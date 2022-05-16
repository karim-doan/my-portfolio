
import clsx from "clsx";
import styles from "./About.module.scss";
import Contact from './Contact.js'
import myImage from '../../images/myImage.jpg'
import { myInfo } from '../../Data'

function About({ id }) {

  const { gerneral,
    contacts,
    objective,
    education,
    skill,
    project,
    certification } = myInfo

  return (
    <div id={id} className={clsx(styles.About)}>
      <div id='Ab-titleContainer'>
        <div clsx={clsx(styles.titleSubject)}>
          <h1 className={clsx(styles.titleText)}>My Document</h1>
        </div>
        <div className={clsx(styles.underlineContainer)}>
          <div className={clsx(styles.underline)}></div>
        </div>
      </div>
      <div id='Ab-titleContent' className={clsx(styles.container)}>
        <div className={clsx(styles.header)}>
          <div className={clsx(styles.name, styles.titleFormatCenter)}>{gerneral.name}</div>
          <div className={clsx(styles.positionApply, styles.titleFormatCenter)}>{gerneral.position}</div>
        </div>

        <div className={clsx(styles.contact, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Contact information</div>

          <Contact contacts={contacts} />

          <div className={clsx(styles.indentifierContact)}>
            <img
              className={clsx(styles.indentifierImage)}
              src={myImage}
            />
          </div>
        </div>
        <div className={clsx(styles.objective, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>objective</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}> 
              <div className={clsx(styles.detailedContent)}>
                {objective.content}
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.education, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Education</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                {education.time}
              </div>
              <ul className={clsx(styles.detailedContent)}>
                <li>{education.content}</li>
                <li>Major: {education.major} - {education.gpa}  </li>
                <li>{education.at}</li>
              </ul>
            </div>
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
                {skill.programLanguages}
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Library / Framework
              </div>
              <div className={clsx(styles.detailedContent)}>
                {skill.library}
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Tools
              </div>
              <div className={clsx(styles.detailedContent)}>
                {skill.tools}
              </div>
            </div>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent)}>
                Databases
              </div>
              <div className={clsx(styles.detailedContent)}>
                {skill.database}
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(styles.projects, styles.subjectContainer)}>
          <div className={clsx(styles.titleFormatCenter, styles.titleContainer)}>Personal projects</div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent, styles.marginTop10)}>
                Weather Focecast
              </div>
              <div className={clsx(styles.detailedContent)}>
                {project.weatherFocecast}
              </div>
            </div>
          </div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent, styles.marginTop10)}>
                My Portfolio
              </div>
              <div className={clsx(styles.detailedContent)}>
                {project.myPortfolio}
              </div>
            </div>
          </div>
          <div className={clsx(styles.titleContentContainer)}>
            <div className={clsx(styles.titleSubContainer)}>
              <div className={clsx(styles.titleContent, styles.marginTop10)}>
                Mini Game
              </div>
              <div className={clsx(styles.detailedContent)}>
                {project.miniGame}
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
                {certification.toeic}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
