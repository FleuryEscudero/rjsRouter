import React from 'react';
import '../css/Contacto.css'

const Contact = () => {
    return (
        <form>
            <legend>Formulario de Contacto</legend>
            <div className="input-field">
                <label htmlFor="name">Nombre</label>
                <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
                <label htmlFor="Mensaje">Mensaje</label>
                <textarea></textarea>
            </div>

        <div className="input-field enviar">
            <input type="submit" value="Enviar" />
        </div>
        </form >
    );
}

export default Contact;