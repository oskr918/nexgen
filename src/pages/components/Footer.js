import styles from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <p>© 2023 NexGenDevOpsTeam. Todos los derechos reservados.</p>
                <p>
                    Hecho con{" "}
                    <span role="img" aria-label="corazón">
                        ❤️
                    </span>{" "}
                    por nuestro equipo de desarrolladores.
                </p>
                <p>
                    <a href="#">Política de privacidad</a> |{" "}
                    <a href="#">Términos y condiciones</a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
