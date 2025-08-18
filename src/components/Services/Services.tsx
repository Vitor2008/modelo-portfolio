import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCartShopping, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button'

const Services = () => {
  return (
    <div className='services animate__animated animate__fadeIn'>
      <div className="card">
        <div className="card-content">
          <div className='card-header'>
            <FontAwesomeIcon icon={faCode} className="icon" />
          </div>
          <div className='card-body'>
            <h3 className='card-title'>Landing Page</h3>
            <p className='card-text'>
              Criação de páginas únicas e impactantes, focadas em conversão e presença digital.
              Ideal para campanhas, lançamentos de produtos ou apresentação de serviços.
            </p>
          </div>
          <div className='card-footer'>
            <Button text='Saber Mais'></Button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className='card-header'>
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
          </div>
          <div className='card-body'>
            <h3 className='card-title'>E-commerce</h3>
            <p className='card-text'>
              Desenvolvimento de lojas virtuais, com sistema de pagamento integrado,
              gerenciamento de produtos, controle de estoque e painel administrativo.
            </p>
          </div>
          <div className='card-footer'>
            <Button text='Saber Mais'></Button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className='card-header'>
            <FontAwesomeIcon icon={faDesktop} className="icon" />
          </div>
          <div className='card-body'>
            <h3 className='card-title'>Sistemas Web</h3>
            <p className='card-text'>
              Sistemas sob medida com autenticação, dashboards, integração com APIs e
              banco de dados, adaptados às necessidades específicas do negócio.
            </p>
          </div>
          <div className='card-footer'>
            <Button text='Saber Mais'></Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;