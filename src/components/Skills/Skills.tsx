import './Skills.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode } from '@fortawesome/free-solid-svg-icons'
import csharp_img from '../../assets/img/csharp-logo.png'
import dotnet_img from '../../assets/img/NET-Framework-Logo.png'
import typescript_img from '../../assets/img/typescript.png'
import react_img from '../../assets/img/react.png'
import node_img from '../../assets/img/nodejs.png'
import mySql_img from '../../assets/img/mysql.png'
import postgre_img from '../../assets/img/postgreSql.png'
import sqlServer_img from '../../assets/img/sqlserver.png'

const Skills = () => {
  return (
    <section className='skills'>
        <div className='skills-container'>
          
          <div className='skills-bars'>
             <div className='title-skills'>
               <h1>Técnica</h1>
             </div>
            <div className='skills-tech'>
                <div className='skills-bars-item'>
                  <img className='img-logo dotnet' src={dotnet_img} width={30}/><ProgressBar skill=".NET" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={csharp_img} width={30}/><ProgressBar skill="CSharp" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={typescript_img} width={30}/><ProgressBar skill="TypeScript" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={react_img} width={30}/><ProgressBar skill="React" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={node_img} width={30}/><ProgressBar skill="Node.js" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={mySql_img} width={30}/><ProgressBar skill="MySQL" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={postgre_img} width={30}/><ProgressBar skill="PostgreSQL" percentage={85} /> 
                </div>
                <div className='skills-bars-item'>
                  <img className='img-logo' src={sqlServer_img} width={30}/><ProgressBar skill="SQLServer" percentage={85} /> 
                </div>
            </div>
          </div>

          <div className='skill-circe'>
            <div className='title-skills'>
               <h1>Comportamentais</h1>
             </div>
            <div className='skill-circe-container'>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>Trabalho em Equipe</p>
              </div>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>Foco em Resultados</p>
              </div>
              <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>Resolução de Problemas</p>
              </div>
               <div className='skill-circe-item'>
                <CircularProgressBar skill="" percentage={65} />
                <p>Adaptabilidade</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Skills
