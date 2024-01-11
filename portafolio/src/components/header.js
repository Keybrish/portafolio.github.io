/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import image from '../assets/banner.png';
import imageMenu from '../assets/header.png';
import imageIcon from '../assets/iconv2.png';
import info from '../assets/info.png';
import me from '../assets/me.png';
import degradado from '../assets/degradado.png';
import PointsIcon from '../Icons/pointsIcon';
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

    const redirectToCV = () => {
        window.location.href = 'https://drive.google.com/file/d/1rLqd-GMD8Hvwv6WF5ET5x1XgkgFZWZzp/view?usp=sharing';
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
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Inicio</b></li>
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Sobre mí</b></li>
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Portafolio</b></li>
                <li style={{marginRight: '100px', color: '#2d2d2c', marginTop: '-3px'}}><b>Contacto</b></li>
            </ul>
        </div>
        <img src={degradado} alt='' style={{width: '100%', marginTop: '12px',marginBottom: '15px'}} />
        <img src={image} alt='' style={{width: '100%'}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
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
            <button type="button" class="btn btn-light" onClick={redirectToCV} style={{background: '#292928', color: 'white', marginTop: '20px', width: '100%', height: '50px', borderRadius: '15px', letterSpacing: '3px'}}><b>Descargar</b></button>
            </div>

        </div>

        <h4 class="card-title">Portafolio</h4>
        Entre los proyectos que considero que destacan mejor mis habilidades están:
        Aplicaciones móviles:

        <div style={{display: 'flex', flexDirection: 'row'}}>

        <div class="card" style={{width: '18rem', marginRight: '100px'}}>
            <div class="card-body">
                <h5 class="card-title">Safey!</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Varios roles</h6>
                <p class="card-text">Aplicación móvil para control de pasajeros y gestión de viejes de buses interprovinciales.</p>
                <button type="button" class="btn btn-light" onClick={redirectToGitPasajero}>Rol pasajero</button>
                <button type="button" class="btn btn-light" onClick={redirectToGitSocio}>Rol socio</button>
            </div>
        </div>

        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Facturando</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Un solo rol</h6>
                <p class="card-text">Aplicación móvil que simula un facturador básico.</p>
                <button type="button" class="btn btn-light" onClick={redirectToGitFacturando}>Ver proyecto</button>
            </div>
        </div>
        </div>

        Sistemas web:

        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">MANGIONA</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Un solo rol</h6>
                <p class="card-text">Sistema web que gestiona pedidos de pizzas.</p>
                <button type="button" class="btn btn-light" onClick={redirectToGitMangiona}>Ver proyecto</button>
            </div>
        </div>        

        <h2>Contacto</h2>
        Me pueden contactar a través de las siguientes redes:
        LinkedIn: https://www.linkedin.com/in/keybrish-zamora-4a9b392a7/
        X: https://twitter.com/keybrish
        Instagram: https://www.instagram.com/keybrish_zm/
        Gmail: keychanpa@gmail.com

    </div>
  );
}

export default header;
