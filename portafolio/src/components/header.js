/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import image from '../assets/banner.png';
import imageMenu from '../assets/header.png';
import imageIcon from '../assets/iconv2.png';
import degradado from '../assets/degradado.png';
import PointsIcon from '../Icons/pointsIcon';
import EmailIcon from '../Icons/emailIcon';
import LocationIcon from '../Icons/locationIcon';
import GithubIcon from '../Icons/githubIcon';
import LinkedinIcon from '../Icons/linkedinIcon';
import TwitterIcon from '../Icons/twitterIcon';
import InstagramIcon from '../Icons/instagramIcon';
import 'bootstrap/dist/css/bootstrap.min.css';

function header() {

    const redirectToGitPasajero = () => {
        window.location.href = 'https://github.com/Keybrish/ProyectoAppBusesPasajero';
    };

    const redirectToGitSocio = () => {
        window.location.href = 'https://github.com/Keybrish/ProyectoAppBusesSocio';
    };

    const redirectToGitFacturando = () => {
        window.location.href = 'https://github.com/YadiraAllauca/FacturaMovilGCS';
    };

    const redirectToGitMangiona = () => {
        window.location.href = 'https://github.com/Keybrish/pizza';
    };

    const redirectToGitTabla = () => {
        window.location.href = 'https://github.com/ArmijosThais/ProyectoEconomia';
    };

    const redirectToCV = () => {
        window.location.href = 'https://drive.google.com/file/d/1rLqd-GMD8Hvwv6WF5ET5x1XgkgFZWZzp/view?usp=sharing';
    };

    const redirectToCertificados = () => {
        window.location.href = 'https://drive.google.com/drive/folders/1DezOYd-zzXubJBuqJYs9BKzo2mpfxDQJ?usp=sharing';
    };

    const redirectToGitHub = () => {
        window.location.href = 'https://github.com/Keybrish';
    };

    const redirectToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/keybrish-zamora-4a9b392a7/';
    };

    const redirectToTwitter = () => {
        window.location.href = 'https://twitter.com/keybrish';
    };

    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/keybrish_zm/';
    };

  return (
    <div>
        <div style={{height: '50', widht: 'full', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px'}}>
            <div>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '100px'}}>
                    <PointsIcon fill={'#000'} widht={30} height={30} style={{marginTop: '3px', position: 'absolute'}}/>
                    <PointsIcon fill={'#000'} widht={30} height={30} style={{marginTop: '9px', position: 'absolute'}}/>
                    <PointsIcon fill={'#000'} widht={30} height={30} style={{marginTop: '14px', position: 'absolute'}}/>
                </div>
                <img src={imageMenu} style={{height: '30px', marginLeft: '125px', marginTop: '11px'}} alt='' />
            </div>
            <img src={imageIcon} style={{height: '45px', marginTop: '3px', borderRadius: '100%'}} alt='' />
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0, justifyContent: 'end' }}>
                <a href='#' style={{marginRight: '35px', color: '#2d2d2c', marginTop: '10px', textDecoration: 'none'}}><b>Inicio</b></a>
                <a href='#about' style={{marginRight: '35px', color: '#2d2d2c', marginTop: '10px', textDecoration: 'none'}}><b>Sobre mí</b></a>
                <a href='#portafolio' style={{marginRight: '35px', color: '#2d2d2c', marginTop: '10px', textDecoration: 'none'}}><b>Portafolio</b></a>
                <a href='#contacto' style={{marginRight: '100px', color: '#2d2d2c', marginTop: '10px', textDecoration: 'none'}}><b>Contacto</b></a>
            </ul>
        </div>
        <img src={degradado} alt='' style={{width: '100%', marginTop: '12px',marginBottom: '15px'}} />
        <img src={image} alt='' style={{width: '100%'}} />

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{margin: '75px', marginBottom: '0px'}}>
            <div class="progress-bar" style={{width: '25%', backgroundColor: '#009fe5'}}></div>
        </div>

        <div id='about' style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '50%', padding: '75px'}}>
            <h4 class="card-title" style={{marginBottom: '25px'}}><span style={{background: '#009fe5', color: '#fff', borderRadius: '50%', display: 'inline-block', textAlign: 'center', width: '35px', height: '35px', padding: '2px', boxShadow: '0 0 6px 0 rgba(0, 0, 0, .5)', marginRight: '15px', alignItems: 'center', fontSize: '16px', paddingTop: '7px'}}>1</span>Sobre mí</h4>
            <div class="card">
            <div class="card-body">
            <p style={{textAlign: 'justify'}}>Mi interés en el mundo tenológico va en aumento cada día que pasa, mi pasión se encuentra en crear grandes experiencias en los usuarios a través del desarrollo frontend. Mi enfoque se centra en el diseño de cada aplicación web y móvil que tengo la oportunidad de construir. </p>
            <p style={{textAlign: 'justify'}}>A pesar de mi enfoque principal en el frontend, también tengo sólidos conocimientos en desarrollo backend. Esta combinación de habilidades me permite no solo diseñar interfaces agradables, sino también crear bases sólidas y eficientes que sustentan el funcionamiento impecable de las aplicaciones. </p>
            <p style={{textAlign: 'justify'}}>Mi experiencia se basa en diversos proyectos, desde iniciativas personales hasta problemas planteados por la universidad a la que pertenezco. Estos proyectos son los que me han permitido explorar nuevas tecnologías, utilizar distintas metodologías y enfrentar desafíos complejos con creatividad y determinación. </p>
            </div>
            </div>
            </div>
            <div style={{width: '50%', padding: '75px', alignItems: 'center'}}>
            <h4 class="card-title" style={{marginBottom: '25px'}}><span style={{background: '#009fe5', color: '#fff', borderRadius: '50%', display: 'inline-block', textAlign: 'center', width: '35px', height: '35px', padding: '2px', boxShadow: '0 0 6px 0 rgba(0, 0, 0, .5)', marginRight: '15px', alignItems: 'center', fontSize: '16px', paddingTop: '7px'}}>1.1</span>Tecnologías</h4>
            <div class="card">
            <div class="card-body">
            <p>Varias herramientas que he utilizado a lo largo de mi aprendizaje son:</p>
            <p><b>Lenguajes:</b> Python, JavaScript, TypeScript, Java, PHP <br/>
            <b>Frameworks:</b> React, React Native, Angular, Node.js, Bootstrap <br/>
            <b>Bases de datos:</b> MySQL, Firebase, SQL Server, Oracle, MongoDB<br/>
            <b>Gestores de proyectos:</b> Jira, Asana, Trello, ClickUp<br/>
            <b>Herramientas de diseño:</b> Figma, Adobe XD, Photoshop</p>
            </div>
            </div>
            <h4 class="card-title" style={{marginTop: '40px'}}><span style={{background: '#009fe5', color: '#fff', borderRadius: '50%', display: 'inline-block', textAlign: 'center', width: '35px', height: '35px', padding: '2px', boxShadow: '0 0 6px 0 rgba(0, 0, 0, .5)', marginRight: '15px', alignItems: 'center', fontSize: '16px', paddingTop: '7px'}}>1.2</span>CV</h4>
            <button type="button" class="btn btn-light" onClick={redirectToCV} style={{background: '#292928', color: 'white', marginTop: '20px', width: '50%', height: '50px', borderRadius: '15px', letterSpacing: '3px'}}><b>Descargar CV</b></button>
            <button type="button" class="btn btn-light" onClick={redirectToCertificados} style={{background: '#009fe5', color: 'white', marginTop: '20px', width: '50%', height: '50px', borderRadius: '15px', letterSpacing: '3px'}}><b>Ver certificados</b></button>
            </div>

        </div>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{margin: '75px', marginTop: '0px'}}>
            <div class="progress-bar" style={{width: '50%', backgroundColor: '#009fe5'}}></div>
        </div>

        <h4 id='portafolio' class="card-title" style={{display: 'flex', justifyContent: 'center'}}>Portafolio</h4>
        <div style={{ textAlign: 'center' }}>
        <p style={{margin: 'auto', width: '20%'}}>Entre los proyectos que considero que destacan mejor mis habilidades están:</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{widht: '50%', padding: '75px'}}>
                    <h4 class="card-title" style={{marginTop: '0px', marginBottom: '20px'}}><span style={{background: '#009fe5', color: '#fff', borderRadius: '50%', display: 'inline-block', textAlign: 'center', width: '35px', height: '35px', padding: '2px', boxShadow: '0 0 6px 0 rgba(0, 0, 0, .5)', marginRight: '15px', alignItems: 'center', fontSize: '16px', paddingTop: '7px'}}>1.1</span>Aplicaciones móviles</h4>

        <div style={{display: 'flex', flexDirection: 'row'}}>

        <div class="card" style={{width: '18rem', marginRight: '100px', background: '#292928', color: 'white'}}>
            <div class="card-body">
                <h5 class="card-title">Safey!</h5>
                <h6 class="card-subtitle mb-2" style={{color: 'white'}}>Varios roles</h6>
                <p class="card-text">Aplicación móvil para control de pasajeros y gestión de viejes de buses interprovinciales.</p>
                <button type="button" class="btn btn-dark" style={{backgroundColor: '#434343', marginRight: '10px'}} onClick={redirectToGitPasajero}>Rol pasajero</button>
                <button type="button" class="btn btn-dark" style={{backgroundColor: '#434343'}} onClick={redirectToGitSocio}>Rol socio</button>
            </div>
        </div>

        <div class="card" style={{width: '18rem', marginRight: '100px'}}>
            <div class="card-body">
                <h5 class="card-title">Facturando</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Un solo rol</h6>
                <p class="card-text">Aplicación móvil que simula un facturador básico.</p>
                <button type="button" class="btn btn-light" onClick={redirectToGitFacturando}>Ver proyecto</button>
            </div>
        </div>

        <div class="card" style={{width: '18rem', marginRight: '100px', background: '#292928', color: 'white'}}>
            <div class="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h6 class="card-subtitle mb-2" style={{color: 'white'}}>Para ver más proyectos de aplicaciones móviles puedes visitar mi perfil de GitHub...</h6>
                <button type="button" class="btn btn-dark" style={{backgroundColor: '#434343'}} onClick={redirectToGitSocio}>Ver perfil...</button>
            </div>
        </div>
        </div>
        </div>
        <div style={{widht: '50%', padding: '75px', paddingTop: '0px'}}>
            <h4 class="card-title" style={{marginTop: '0px', marginBottom: '20px'}}><span style={{background: '#009fe5', color: '#fff', borderRadius: '50%', display: 'inline-block', textAlign: 'center', width: '35px', height: '35px', padding: '2px', boxShadow: '0 0 6px 0 rgba(0, 0, 0, .5)', marginRight: '15px', alignItems: 'center', fontSize: '16px', paddingTop: '7px'}}>1.2</span>Sistemas web</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div class="card" style={{width: '18rem', marginRight: '100px', background: '#292928', color: 'white'}}>
                    <div class="card-body">
                        <h5 class="card-title">MANGIONA</h5>
                        <h6 class="card-subtitle mb-2" style={{color: 'white'}}>Un solo rol</h6>
                        <p class="card-text">Sistema web que gestiona pedidos de pizzas.</p>
                        <button type="button" class="btn btn-dark" style={{backgroundColor: '#434343'}} onClick={redirectToGitMangiona}>Ver proyecto</button>
                    </div>
                </div>
                <div class="card" style={{width: '18rem', marginRight: '100px'}}>
                    <div class="card-body">
                        <h5 class="card-title">Tablas de amortización</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Un solo rol</h6>
                        <p class="card-text">Sistema web que simula tablas de amortización para los distintos créditos.</p>
                        <button type="button" class="btn btn-light" onClick={redirectToGitTabla}>Ver proyecto</button>
                    </div>
                </div>  
                <div class="card" style={{width: '18rem', marginRight: '100px', background: '#292928', color: 'white'}}>
            <div class="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h6 class="card-subtitle mb-2" style={{color: 'white'}}>Para ver más proyectos de sistemas web puedes visitar mi perfil de GitHub...</h6>
                <button type="button" class="btn btn-dark" style={{backgroundColor: '#434343'}} onClick={redirectToGitSocio}>Ver perfil...</button>
            </div>
        </div>
            </div>
        </div>
        </div>

        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin: '75px', marginTop: '0px'}}>
            <div class="progress-bar" style={{width: '75%', backgroundColor: '#009fe5'}}></div>
        </div>

        <div id='contacto' style={{height: '200px', width: '100%', background: '#292928', padding: '250px', paddingTop: '25px', paddingBottom: '200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <img src={imageIcon} style={{height: '75px', width: '75px', marginTop: '3px', borderRadius: '100%'}} alt='' />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <EmailIcon fill={'#009fe5'} style={{marginTop: '20px'}} />
                    <p style={{color: 'white', fontSize: '12px', marginTop: '19px', marginLeft: '10px'}}>keychanpa@gmail.com</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <LocationIcon fill={'#009fe5'} style={{marginTop: '4px'}} />
                    <p style={{color: 'white', fontSize: '12px', marginTop: '5px', marginLeft: '10px'}}>Ambato, Ecuador</p>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '300px'}}>
                <p style={{color: 'white'}}><b>Secciones</b></p>
                <a href='#' style={{color: 'white', fontSize: '12px', textDecoration: 'none', marginTop: '5px'}}>Inicio</a>
                <a href='#about' style={{color: 'white', fontSize: '12px', textDecoration: 'none', marginTop: '10px'}}>Sobre mí</a>
                <a href='#portafolio' style={{color: 'white', fontSize: '12px', textDecoration: 'none', marginTop: '10px'}}>Portafolio</a>
                <a href='#contacto' style={{color: 'white', fontSize: '12px', textDecoration: 'none', marginTop: '10px'}}>Contacto</a>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{color: 'white'}}><b>Redes sociales</b></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <GithubIcon fill={'white'} onClick={redirectToGitHub}/>
                    <LinkedinIcon fill={'white'} style={{marginLeft: '15px'}} onClick={redirectToLinkedIn}/>
                    <TwitterIcon fill={'white'} style={{marginLeft: '15px'}} onClick={redirectToTwitter}/>
                    <InstagramIcon fill={'white'} style={{marginLeft: '15px'}} onClick={redirectToInstagram}/>
                </div>
            </div>
        </div>

    </div>
  );
}

export default header;
