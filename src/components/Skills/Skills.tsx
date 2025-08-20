import './Skills.css'
import ProgressBar from '../ProgressBar/ProgressBar'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar'
import javascript_img from '../../assets/img/javascript.png'
import dotnet_img from '../../assets/img/NET-Framework-Logo.png'
import typescript_img from '../../assets/img/typescript.png'
import react_img from '../../assets/img/react.png'
import node_img from '../../assets/img/nodejs.png'
import mySql_img from '../../assets/img/mysql.png'
import postgre_img from '../../assets/img/postgreSql.png'
import sqlServer_img from '../../assets/img/sqlserver.png'

const Skills = () => {

  // const tempoTotalTecnico = 2.5; //Anos
  // const tempoTotalComportamental = 6; //Anos 

  // const tempoDotnet = Math.round(1 / tempoTotalTecnico * 100);
  // const tempoJavaScript = Math.round(2.5 / tempoTotalTecnico * 100);
  // const tempoTypeScript = Math.round(0.5 / tempoTotalTecnico * 100);
  // const tempoReact = Math.round(0.5 / tempoTotalTecnico * 100);
  // const tempoNode = Math.round(1.5 / tempoTotalTecnico * 100);
  // const tempoMySql = Math.round(1.5 / tempoTotalTecnico * 100);
  // const tempoPostgreSQL = Math.round(1 / tempoTotalTecnico * 100);
  // const tempoSqlServer = Math.round(1 / tempoTotalTecnico * 100);

  // const tempoTrabalhoEquipe = Math.round(6 / tempoTotalComportamental * 100);
  // const tempoFocoResultados = Math.round(6 / tempoTotalComportamental * 100);
  // const tempoResolucaoProblemas = Math.round(3 / tempoTotalComportamental * 100);
  // const tempoAdaptabilidade = Math.round(1.5 / tempoTotalComportamental * 100);

  const tecnicoSkills = {
    dotnet: 1.0,
    javascript: 2.5,
    typescript: 0.5,
    react: 0.5,
    node: 1.5,
    mysql: 1.5,
    postgresql: 1.0,
    sqlserver: 1.0,
  };

  const comportamentalSkills = {
    trabalhoEquipe: 6.0,
    focoResultados: 6.0,
    resolucaoProblemas: 3.0,
    adaptabilidade: 1.5,
  };


  const calcularPercentual = (skills: Record<string, number>) => {
    const total = Object.values(skills).reduce((acc, val) => acc + val, 0);
    return Object.fromEntries(
      Object.entries(skills).map(([key, val]) => [key, Math.round((val / total) * 100)])
    );
  };

  const percentualTecnico = calcularPercentual(tecnicoSkills);
  const percentualComportamental = calcularPercentual(comportamentalSkills);

  return (
    <section className='skills'>
      <div className='skills-container'>

        <div className='skills-bars'>
          <div className='title-skills'>
            <h1>Técnica</h1>
          </div>
          <div className='skills-tech'>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={javascript_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">2 anos e meio de atuação</div>
                </div>
              </div>
              <ProgressBar skill="JavaScript" percentage={percentualTecnico.javascript} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={node_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">1 ano e meio de atuação</div>
                </div>
              </div>
              <ProgressBar skill="Node.js" percentage={percentualTecnico.node} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={typescript_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">5 meses de atuação</div>
                </div>
              </div>
              <ProgressBar skill="TypeScript" percentage={percentualTecnico.typescript} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={react_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">5 meses de atuação</div>
                </div>
              </div>
              <ProgressBar skill="React" percentage={percentualTecnico.react} />
            </div>

            <div className='skills-bars-item mobile-top'>
              <div className='info'>
                <img className='img-logo dotnet' src={dotnet_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">1 ano de atuação</div>
                </div>
              </div>
              <ProgressBar skill=".NET" percentage={percentualTecnico.dotnet} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={mySql_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">1 ano e meio de atuação</div>
                </div>
              </div>
              <ProgressBar skill="MySQL" percentage={percentualTecnico.mysql} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={postgre_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">1 ano de atuação</div>
                </div>
              </div>
              <ProgressBar skill="PostgreSQL" percentage={percentualTecnico.postgresql} />
            </div>

            <div className='skills-bars-item'>
              <div className='info'>
                <img className='img-logo' src={sqlServer_img} width={30} />
                <div className="tooltip-skill">
                  <div className="icon">i</div>
                  <div className="tooltiptext">1 ano de atuação</div>
                </div>
              </div>
              <ProgressBar skill="SQLServer" percentage={percentualTecnico.sqlserver} />
            </div>

          </div>
        </div>

        <div className='skill-circe'>
          <div className='title-skills'>
            <h1>Comportamentais</h1>
          </div>
          <div className='skill-circe-container'>
            <div className='skill-circe-item'>
              <CircularProgressBar skill="" percentage={percentualComportamental.trabalhoEquipe} />
              <p>Trabalho em Equipe</p>
            </div>
            <div className='skill-circe-item'>
              <CircularProgressBar skill="" percentage={percentualComportamental.focoResultados} />
              <p>Foco em Resultados</p>
            </div>
            <div className='skill-circe-item'>
              <CircularProgressBar skill="" percentage={percentualComportamental.resolucaoProblemas} />
              <p>Resolução de Problemas</p>
            </div>
            <div className='skill-circe-item'>
              <CircularProgressBar skill="" percentage={percentualComportamental.adaptabilidade} />
              <p>Adaptabilidade</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
