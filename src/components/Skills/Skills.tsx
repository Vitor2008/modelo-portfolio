import './Skills.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
    <section className='skills'>
        <div className='skills-bars'>
            <ProgressBar skill="HTML" percentage={90} />
            <ProgressBar skill="CSS" percentage={85} />
            <ProgressBar skill="JavaScript" percentage={80} />
            <ProgressBar skill="C#" percentage={75} />
            <ProgressBar skill="React" percentage={70} />
        </div>
    </section>
  )
}

export default Skills
