import './Skills.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode } from '@fortawesome/free-solid-svg-icons'
import csharp_img from '../../assets/img/csharp-logo.png'
import dotnet_img from '../../assets/img/NET-Framework-Logo.png'
import typescript_img from '../../assets/img/typescript.png'
import react_img from '../../assets/img/react.png'
import mySql_img from '../../assets/img/mysql.png'
import postgre_img from '../../assets/img/postgreSql.png'
import sqlServer_img from '../../assets/img/sqlserver.png'

const Skills = () => {
  return (
    <section className='skills'>
        <div className='skills-container'>
          
          <div className='skills-bars'>
            <h1>Técnica</h1>

            <div className='skills-bars-item'>
              <div className='skills-tech'>
                <img className='img-logo dotnet' src={dotnet_img} width={30}/><ProgressBar skill=".NET" percentage={85} /> 
                <img className='img-logo' src={typescript_img} width={30}/><ProgressBar skill="TypeScript" percentage={80} /> 
                <img className='img-logo' src={react_img} width={30}/><ProgressBar skill="React" percentage={70} /> 
                <img className='img-logo' src={react_img} width={30}/><ProgressBar skill="React" percentage={70} /> 
              </div>
              <div className='skills-data-base'>
                <img className='img-logo' src={mySql_img} width={30}/><ProgressBar skill="MySQL" percentage={85} /> 
                <img className='img-logo' src={postgre_img} width={30}/><ProgressBar skill="PostgreeSQL" percentage={80} /> 
                <img className='img-logo' src={sqlServer_img} width={20}/><ProgressBar skill="SQLServer" percentage={70} /> 
                <img className='img-logo' src={react_img} width={30}/><ProgressBar skill="React" percentage={70} /> 
              </div>
            </div>
          </div>

          <div className='skill-circe'>
            <h1>Comportamentais</h1>
            <div className='skill-circe-container'>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>MySQL</p>
              </div>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>MySQL</p>
              </div>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>MySQL</p>
              </div>
               <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>MySQL</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Skills
