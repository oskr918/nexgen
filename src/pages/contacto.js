import React from 'react'
import Layout  from './components/Layout'
import styles from '../styles/contacto.module.css';

const contacto = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <form className={styles.contactForm}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Enviar</button>
      </form>
      </div>
    </Layout>
  )
}
export default contacto;