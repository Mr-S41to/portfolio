import Image from "next/image";
import styles from "./page.module.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import whatsapp from "./assets/whatsapp.png";
import perfil from "./assets/Perfil.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.navBar}>
              <a className={styles.navButton}>Sobre</a>
              <a className={styles.navButton}>Títulos</a>
              <a className={styles.navButton}>Projetos</a>
              <a className={styles.navButton}>Contatos</a>
            </div>

            <div className={styles.bannerContent}>
              <Image className={styles.perfil} src={perfil} alt="Perfil" />
              <h1 className={styles.bannerTitle}>
                Matheus Saito - Engenheiro de Software
              </h1>

              <h2 className={styles.bannerTitle}>{`<Desenvolvimento Fullstack e Mobile />`}</h2>
              <p className={styles.resume}>
                {`Graduado em Engenharia de Software pela Universidade Evangélica de Goias - Uni Evangélica. Atuo como Desenvolvedor FullStack e Mobile desde 2021, desenvolvendo soluções para área da saúde e setor imobiliário com as stacks de NodeJS React, React Native Express e Python com o Flask.  \nCom participação em pesquisas cientificas e de inovação.`}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <a className={styles.button}>
            <div className={styles.row}>
              <Image className={styles.icons} src={github} />
              <p className={styles.buttonTitles}>Github</p>
            </div>
          </a>

          <a className={styles.button}>
            <div className={styles.row}>
              <Image className={styles.icons} src={linkedin} />
              <p className={styles.buttonTitles}>LinkedIn</p>
            </div>
          </a>

          <a className={styles.button}>
            <div className={styles.row}>
              <Image className={styles.icons} src={whatsapp} />
              <p className={styles.buttonTitles}>WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
