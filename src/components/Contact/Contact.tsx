import React, { useRef } from 'react'
import './Contact.css'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import appsettings from '../../../appsettings.json'

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_TOKEN);

        const response = await fetch(`${appsettings.api.Web3Forms.submitUrl}`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Enviado com sucesso!");
            formRef.current?.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
                <form ref={formRef} onSubmit={onSubmit} className="form">
                    <p className="title-contact">Mensagem </p>
                    <p className="message">Envie uma mensagem.</p>

                    <label>
                        <input className="input" type="text" name="title" required></input>
                        <span>Título</span>
                    </label>

                    <div className="flex">
                        <label>
                            <input className="input" type="text" name='name' placeholder="" required></input>
                            <span>Nome</span>
                        </label>

                        <label>
                            <input className="input" type="tel" name='phone' placeholder="" required></input>
                            <span>Telefone</span>
                        </label>
                    </div>

                    <label>
                        <input className="input" type="email" name='email' placeholder="" required></input>
                        <span>Email</span>
                    </label>

                    <label>
                        <textarea name='message' rows={5} className="input" placeholder="" required></textarea>
                        <span>Sua Mensagem...</span>
                    </label>
                    <Button text='Enviar' type='submit' />
                    <p className="result">{result}</p>
                </form>

            </div>
        </div>
    )
}

export default Contact
