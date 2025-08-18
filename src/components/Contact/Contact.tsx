import './Contact.css'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-info animate__animated animate__fadeIn'>
                <h3>Informações de Contato</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} size='lg' /> vial.almeida@icloud.com</li>
                    <li><FontAwesomeIcon icon={faSquarePhone} size='lg' /> (65) 99273-8553</li>
                    <li><FontAwesomeIcon icon={faLocation} size='lg' /> Cuiabá, MT - Brasil </li>
                </ul>
            </div>

            <div className='form-container animate__animated animate__fadeIn'>
                <form className="form">
                    <p className="title-contact">Mensagem </p>
                    <p className="message">Envie uma mensagem.</p>

                    <label>
                        <input className="input" type="text" required></input>
                        <span>Título</span>
                    </label>

                    <div className="flex">
                        <label>
                            <input className="input" type="text" placeholder="" required></input>
                            <span>Nome</span>
                        </label>

                        <label>
                            <input className="input" type="text" placeholder="" required></input>
                            <span>Sobrenome</span>
                        </label>
                    </div>

                    <label>
                        <input className="input" type="email" placeholder="" required></input>
                        <span>Email</span>
                    </label>

                    <label>
                        <textarea rows={5} className="input" placeholder="" required></textarea>
                        <span>Sua Mensagem...</span>
                    </label>

                    <Button text='Enviar'></Button>
                </form>
            </div>
        </div>
    )
}

export default Contact
