import Link from 'next/link';
import styles from '../../styles/Nav.module.css'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
const poppins = Poppins({ subsets: ['latin'], weight:['400'] })

function Navegacion() {
    return (
        <nav>
            <div className={styles.navbar}>
            <div className={`${styles.container} ${styles["nav-container"]}`}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={styles["hamburger-lines"]}>
                        <span className={`${styles.line} ${styles["line1"]}`}></span>
                        <span className={`${styles.line} ${styles["line2"]}`}></span>
                        <span className={`${styles.line} ${styles["line3"]}`}></span>
                    </div>
                    <div className={styles.logo}>
                        <Image src='/NexGenCortado.png' width={300} height={64}></Image>
                    </div>
                    <div className={styles['menu-items']}>
                        <li className='li'><Link className='a' href="/">Home</Link></li>
                        <li className='li'><Link className='a' href="abaut">about</Link></li>
                        <li className='li'><Link className='a' href="contacto">contact</Link></li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navegacion;