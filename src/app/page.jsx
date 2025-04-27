import Image from "next/image";
//CSS.
import styles from "./page.module.css";
//Assets
import github from "./assets/github-icon.png";
import linkedin from "./assets/linkedin.png";
import whatsapp from "./assets/whatsapp.png";
import eMail from "./assets/eMail.png";
import perfil from "./assets/Perfil.png";
import JS from "./assets/JS.png";
import React from "./assets/React.png";
import Express from "./assets/Express.png";
import Git from "./assets/Git.png";
import Github from "./assets/Github.png";
import MySQL from "./assets/MySQL.png";
import WordPress from "./assets/WordPress.png";
import Python from "./assets/Python.png";
import Merito from "./assets/MeritoCientifico.jpg";
import Merito2 from "./assets/MeritoCientifico2.jpg";
import Loyse from "./assets/Loyse.gif";
import Android from "./assets/Android.png";
import iOS from "./assets/iOS.png";
import NativeBase from "./assets/NativeBase.png";
import PhotoTom1 from "./assets/PhotoTom1.jpg";
import PhotoTom2 from "./assets/PhotoTom2.jpg";
import PhotoTom3 from "./assets/PhotoTom3.jpg";
import PhotoTom4 from "./assets/PhotoTom4.jpg";
import PhotoTom5 from "./assets/PhotoTom5.jpg";
import Tech from "./assets/Tech.png";
import SP1 from "./assets/SP1.png";
import SP2 from "./assets/SP2.png";
import SP3 from "./assets/SP3.png";
import SP4 from "./assets/SP4.png";
import SP5 from "./assets/SP5.png";
import SP6 from "./assets/SP6.png";
import SP7 from "./assets/SP7.png";
import Zen1 from "./assets/1.png";
import Zen2 from "./assets/2.png";
import Zen3 from "./assets/3.png";
import Zen4 from "./assets/4.png";
import Zen5 from "./assets/5.png";
import Zen6 from "./assets/6.png";
import Zen7 from "./assets/7.png";
import Zen8 from "./assets/8.png";
//Components
import SubTitle from "./components/SubTitle";
import WhiteText from "./components/WhiteText";
import VSlider from "./components/VSlider";
import BlackSubTitle from "./components/BlackSubTitle";
import BlackText from "./components/BlackText";
import BlackBoldText from "./components/BlackBoldText";
import HSlider from "./components/HSlider";
import WhiteBoldText from "./components/WitheBoldText";

export default function Home() {
  const MeritoCientifico = [Merito, Merito2];
  const SaintPaul = [SP1, SP2, SP3, SP4, SP5, SP6, SP7];
  const ZenKai = [Zen1, Zen2, Zen3, Zen4, Zen5, Zen6, Zen7, Zen8];

  const LinkedInUrl = "https://linkedin.com/in/matheusnsaito";
  const GithubUrl = "https://github.com/Mr-S41to";
  const WhatsAppUrl = "https://api.whatsapp.com/send?phone=5562983045040";
  const eMailUrl =
    "mailto:matheusnsaito@outlook.com?subject=Olá,%20vim%20pelo%20seu%20portfólio";
  const CVUrl = "CVMatheusSaito.pdf";

  return (
    <body className={styles.body}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.container}>
            <div className={styles.navBar}>
              <a className={styles.navButton}>Sobre</a>
              <a className={styles.navButton}>Projetos</a>
              <a className={styles.navButton}>Contatos</a>
            </div>

            <div className={styles.bannerContent}>
              <Image className={styles.perfil} src={perfil} alt="Perfil" />
              <h1 className={styles.bannerTitle}>
                Matheus Saito - Engenheiro de Software
              </h1>

              <h2
                className={styles.bannerTitle}
              >{`<Desenvolvimento Fullstack e Mobile />`}</h2>
              <p className={styles.resume}>
                {`Graduado em Engenharia de Software pela Universidade Evangélica de Goias - Uni Evangélica. Atuo como Desenvolvedor FullStack e Mobile desde 2021, desenvolvendo soluções para área da saúde e setor imobiliário com as stacks de NodeJS React, React Native Express e Python com o Flask.  \nCom participação em pesquisas cientificas e de inovação.`}
              </p>
            </div>

            <div className={styles.row}>
              <a className={styles.button} href={GithubUrl} target="_blank">
                <div className={styles.row}>
                  <Image
                    className={styles.icons}
                    src={github}
                    alt="Botão Github"
                  />
                  <p className={styles.buttonTitles}>Github</p>
                </div>
              </a>

              <a className={styles.button} href={LinkedInUrl} target="_blank">
                <div className={styles.row}>
                  <Image
                    className={styles.icons}
                    src={linkedin}
                    alt="Botão LinkedIn"
                  />
                  <p className={styles.buttonTitles}>LinkedIn</p>
                </div>
              </a>

              <a className={styles.button} href={WhatsAppUrl} target="_blank">
                <div className={styles.row}>
                  <Image
                    className={styles.icons}
                    src={whatsapp}
                    alt="Botão WhatsApp"
                  />
                  <p className={styles.buttonTitles}>WhatsApp</p>
                </div>
              </a>

              <a className={styles.button} href={eMailUrl}>
                <div className={styles.row}>
                  <Image
                    className={styles.icons}
                    src={eMail}
                    alt="Botão E-Mail"
                  />
                  <p className={styles.buttonTitles}>E-Mail</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.halfDiv}>
              <div className={styles.content}>
                <SubTitle subTitle={`<Sobre />`} />

                <WhiteText text="Graduado em Engenharia de Software pela UniEvangélica em 2024, apaixonado por tecnologia e desenvolvimento de soluções que realmente fazem diferença." />

                <WhiteText text="Ao longo da minha jornada, atuei em projetos nas áreas de saúde, setor imobiliário, desenvolvendo desde sistemas web completos até aplicações mobile com foco em usabilidade e performance." />

                {/* Merito cientifico. */}
                <div className={styles.center}>
                  <VSlider images={MeritoCientifico} />
                </div>

                <WhiteText text="Envolvido em pesquisas para desenvolvimento de projetos com impacto social, como uma plataforma de telemedicina focada em saúde mental e em um app de detecção de fototipos de pele. Sempre em busca de desafios que ajudem a evoluir como desenvolvedor e a gerar valor em produtos inovadores." />

                <div className={styles.center}>
                  <a className={styles.buttonWhiteCV} href={CVUrl} download>
                    <div className={styles.row}>
                      <p className={styles.buttonTitleWhite}>Baixar CV</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.halfDiv}>
              <div className={styles.logoContainer}>
                <Image className={styles.logo} src={JS} alt="Logo JS" />
                <Image className={styles.logo} src={React} alt="Logo React" />
                <Image
                  className={styles.logo}
                  src={Express}
                  alt="Logo Express"
                />
                <Image className={styles.logo} src={MySQL} alt="Logo MySQL" />
                <Image className={styles.logo} src={Git} alt="Logo Git" />
                <Image className={styles.logo} src={Github} alt="Logo Github" />
                <Image
                  className={styles.logo}
                  src={WordPress}
                  alt="Logo WordPress"
                />
              </div>

              <div className={styles.content}>
                <WhiteText text="Experiências com tecnologias como React, React Native, Node.js, Python e Express, conhecimentos em versionamento de código com Git, componentização e arquitetura de software, processamento de dados utilizando expressões regulares, integração de APIs e criação de interfaces intuitivas tanto em web quanto em mobile." />
              </div>

              <div className={styles.whiteDiv}>
                <div className={styles.content}>
                  <BlackSubTitle subTitle={`<Projetos />`} />

                  <BlackBoldText text="Saint Paul - Analise de Débitos" />

                  <BlackText text="Sistema Web para Análise de Débitos e cruzamento de dados através de PDFs emitidos pela prefeitura de Anápolis." />
                  <div className={styles.center}>
                    <HSlider images={SaintPaul} />
                  </div>
                  <BlackText text="O sistema também conta com um modulo de Gerência de Vistorias e Emissão de Laudos. Desenvolvido para ser hosteado em ambiente Windows em rede local a pedido da empresa via Docker" />

                  <BlackBoldText text="Tecnologias:" />
                  <div className={styles.row}>
                    <div className={styles.iconBox}>
                      <Image
                        className={styles.miniLogo}
                        src={React}
                        alt="Logo React"
                      />
                      <Image
                        className={styles.miniLogo}
                        src={Python}
                        alt="Logo Python"
                      />
                      <Image
                        className={styles.miniLogo}
                        src={Express}
                        alt="Logo Express"
                      />
                      <Image
                        className={styles.miniLogo}
                        src={MySQL}
                        alt="Logo MySQL"
                      />
                    </div>
                    <div className={styles.halfDiv}>
                      <p>{` `}</p>
                    </div>
                  </div>
                  <BlackText text="Desenvolvido com React para a interface Web, Node.js para Back-End Express e Sequelize ORM para definir as models e gerenciar a integração com o MySQL. O sistema utiliza Python com a biblioteca Pandas para realizar a leitura dos aquivos PDF para tratar os dados em texto e modelar os débitos em data frames para fazer o cruzamento de dados dos imoveis dos extratos com o banco de dados da empresa par atribuir a responsabilidade dos débitos a cliente ou empresa e emitir Relatórios de Dívidas em Excel." />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectsDiv}>
          <div className={styles.row}>
            <div className={styles.halfDiv}>
              <div className={styles.content}>
                <WhiteBoldText text="ZenKai - Saúde Mental" />

                <WhiteText text="Plataforma de Telemedicina focada em Saúde Mental." />
                <WhiteText text="Desenvolvida para atender a demanda de atendimento online para Psicologia e Psiquiatria. Web e Mobile com funcionalidades de agendamento, avaliações emocionais e diário de humor." />

                <div className={styles.center}>
                  <HSlider images={ZenKai} />
                </div>

                <WhiteText text="Inicialmente chamado de Psique, o projeto foi iniciado durante o programa de Iniciação Tecnológica da UniEvangélica, a ideia surgiu da percepção da dificuldade de uso da tecnologia pela terapeuta particular durante a pandemia de Covid-19." />
                <WhiteText text="Na virada de 2024 para 2025, o projeto foi selecionado para participar do NIIS II do HubGoias, na imersão de negócios onde foi reestruturado e renomeado para ZenKai." />

                <div className={styles.center}>
                  <Image src={Loyse} alt="Loyse" className={styles.gif} />
                </div>

                <WhiteBoldText text="Tecnologias:" />
                <div className={styles.row}>
                  <div className={styles.iconBox}>
                    <Image
                      className={styles.miniLogo}
                      src={React}
                      alt="Logo React, React Native"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={NativeBase}
                      alt="Logo Native Base"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={Android}
                      alt="Logo Android"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={iOS}
                      alt="Logo iOS"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={Express}
                      alt="Logo Express"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={MySQL}
                      alt="Logo MySQL"
                    />
                  </div>

                  <a
                    className={styles.buttonProject}
                    // href=""
                    // target="_blank"
                  >
                    <p className={styles.buttonTitleProject}>Em Breve</p>
                  </a>
                </div>
                <WhiteText text="Desenvolvido com React para a interface Web para profissionais, React Native para um App Mobile, Node.js para Back-End Express e Sequelize ORM para definir as models e gerenciar a integração com o MySQL." />
              </div>
            </div>

            <div className={styles.halfDiv}>
              <div className={styles.content}>
                <WhiteBoldText text="Loyse Pogiam - Landing Page" />
                <WhiteText text="Landing Page para apresentação profissional de psicóloga." />

                <div className={styles.center}>
                  <Image src={Loyse} alt="Loyse" className={styles.gif} />
                </div>

                <WhiteText text="O site conta com Blog e otmização de SEO. Desenvolvido colaborativamente com a psicologa em WordPress com Elementor. O site conta com responsividade em dimensões para Web, Tablets e SmartPhones." />
                <WhiteText text="O desenvolvimento colaorativo contou com artes feitas pela propria Loyse dando carater mais pessoal ao site." />

                <WhiteBoldText text="Tecnologias:" />
                <div className={styles.row}>
                  <div className={styles.iconBox}>
                    <Image
                      className={styles.miniLogo}
                      src={WordPress}
                      alt="Logo WordPress"
                    />
                  </div>

                  <a
                    className={styles.buttonProject}
                    href="https://loysepogiam.com"
                    target="_blank"
                  >
                    <p className={styles.buttonTitleProject}>Ver Projeto</p>
                  </a>
                </div>

                <WhiteBoldText text="Teste de PASAT (Paced Auditory Serial Addition Task)" />
                <WhiteText text="Este projeto teve como objetivo desenvolver a tradução do teste PASAT para o português brasileiro, para a aplicação do teste em pacientes que falam português. E teste foi desnevolvido em apoio a um grupo de pesquisa do Curso de Medicina da UniEvangélica." />
                <WhiteText text="O objetivo é que o usuário some o número atual com o número anterior e selecione a resposta correta clicando no botão correspondente. Cada número é gerado e pronunciado em um intervalo inicial de 2 segundos, criando um ritmo constante para as interações. O teste avalia a capacidade de realizar operações mentais rápidas e lidar com o estresse do tempo limitado e da pressão gerada por interações contínuas." />

                <div className={styles.center}>
                  <Image src={Loyse} alt="Loyse" className={styles.gif} />
                </div>

                <WhiteText text="Desenvolvido com React JS, SpeechSynthesis para falar os numeros do teste." />
                <WhiteBoldText text="Tecnologias:" />
                <div className={styles.row}>
                  <div className={styles.iconBox}>
                    <Image
                      className={styles.miniLogo}
                      src={React}
                      alt="Logo React"
                    />
                    <Image
                      className={styles.miniLogo}
                      src={JS}
                      alt="Logo JavaScript"
                    />
                  </div>

                  <a
                    className={styles.buttonProject}
                    href="https://pasat.onrender.com"
                    target="_blank"
                  >
                    <p className={styles.buttonTitleProject}>Ver Projeto</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectsContatcs}>
          <div className={styles.content}>
            <WhiteBoldText text="Photo-Tom" />
            <div className={styles.halfDiv}>
              <WhiteText text="Aplicativo para detecção de Fototipos de Pele. Desenvolvido em 2023, neste projeto atuei como Dev. Mobile. O desenvolvimento utilizou o React Native com Expo e a biblioteca de componentes Native Base." />
              <WhiteText text="O aplicativo utiliza a câmera do celular para capturar a imagem da pele do usuário para comparação com uma palheta de cores de pele, o usuário responde um questionário para determinar o fototipo." />
            </div>
            <div className={styles.imageBox}>
              <Image
                className={styles.photoTom}
                src={PhotoTom1}
                alt="Photo Tom 1"
              />
              <Image
                className={styles.photoTom}
                src={PhotoTom2}
                alt="Photo Tom 2"
              />
              <Image
                className={styles.photoTom}
                src={PhotoTom3}
                alt="Photo Tom 3"
              />
              <Image
                className={styles.photoTom}
                src={PhotoTom4}
                alt="Photo Tom 4"
              />
              <Image
                className={styles.photoTom}
                src={PhotoTom5}
                alt="Photo Tom 5"
              />
            </div>

            <div className={styles.halfDiv}>
              <WhiteBoldText text="Tecnologias:" />
              <div className={styles.iconBox}>
                <Image
                  className={styles.miniLogo}
                  src={React}
                  alt="Logo React, React Native"
                />
                <Image
                  className={styles.miniLogo}
                  src={NativeBase}
                  alt="Logo Native Base"
                />
                <Image
                  className={styles.miniLogo}
                  src={Android}
                  alt="Logo Android"
                />
                <Image className={styles.miniLogo} src={iOS} alt="Logo iOS" />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <p> </p>
          </div>
          <div className={styles.content}>
            <SubTitle subTitle={`<Contatos />`} />
            <WhiteText text="Entre em contato e confira meu Github por:" />
          </div>

          <div className={styles.row}>
            <div className={styles.halfDiv}>
              <div className={styles.center}>
                <div className={styles.glass}>
                  <a
                    className={styles.buttonContact}
                    href={eMailUrl}
                    target="_blank"
                  >
                    <div className={styles.row}>
                      <p className={styles.buttonTitleContact}>E-Mail</p>
                      <Image
                        className={styles.iconsContact}
                        src={eMail}
                        alt="Botão E-Mail"
                      />
                    </div>
                  </a>

                  <a
                    className={styles.buttonContact}
                    href={WhatsAppUrl}
                    target="_blank"
                  >
                    <div className={styles.row}>
                      <p className={styles.buttonTitleContact}>WhatsApp</p>
                      <Image
                        className={styles.iconsContact}
                        src={whatsapp}
                        alt="Botão WhatsApp"
                      />
                    </div>
                  </a>

                  <a
                    className={styles.buttonContact}
                    href={LinkedInUrl}
                    target="_blank"
                  >
                    <div className={styles.row}>
                      <p className={styles.buttonTitleContact}>LinkedIn </p>
                      <Image
                        className={styles.iconsContact}
                        src={linkedin}
                        alt="Botão LinkedIn"
                      />
                    </div>
                  </a>

                  <a
                    className={styles.buttonContact}
                    href={GithubUrl}
                    target="_blank"
                  >
                    <div className={styles.row}>
                      <p className={styles.buttonTitleContact}>Github</p>
                      <Image
                        className={styles.iconsContactGit}
                        src={github}
                        alt="Botão Github"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.halfDiv}>
              <div className={styles.whiteDiv}>
                <div className={styles.content}>
                  <div className={styles.center}>
                    <Image
                      className={styles.asset}
                      src={Tech}
                      alt="Ilustração"
                    />

                    <a className={styles.buttonBlackCV} href={CVUrl} download>
                      <div className={styles.row}>
                        <p className={styles.buttonTitleBlack}>Baixar CV</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Desenvolvido por Matheus N. Saito - 2025
            </p>
          </div>
        </div>
      </main>
    </body>
  );
}
