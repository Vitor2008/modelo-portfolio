import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-container">

            <div>

            </div>

            <div className='form-container'>
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

                    <button className="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
