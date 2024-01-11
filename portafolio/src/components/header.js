import image from '../assets/banner.png';
import imageMenu from '../assets/header.png';
import imageIcon from '../assets/iconv2.png';
import degradado from '../assets/degradado.png';
import PointsIcon from '../Icons/pointsIcon';

function header() {

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
            <img src={imageIcon} style={{height: '45px', marginLeft: '240px', marginTop: '3px', borderRadius: '100%'}} alt='' />
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0, justifyContent: 'end' }}>
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Inicio</b></li>
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Sobre mí</b></li>
                <li style={{marginRight: '35px', color: '#2d2d2c', marginTop: '-3px'}}><b>Portafolio</b></li>
                <li style={{marginRight: '100px', color: '#2d2d2c', marginTop: '-3px'}}><b>Contacto</b></li>
            </ul>
        </div>
        <img src={degradado} alt='' style={{width: '100%', marginTop: '12px',marginBottom: '15px'}} />
        <img src={image} alt='' style={{width: '100%'}} />

        <h2>Sobre mí</h2>
        <p>Mi interés en el mundo tenológico va en aumento cada día que pasa, mi pasión se encuentra en crear grandes experiencias en los usuarios a través del desarrollo frontend. Mi enfoque se centra en el diseño de cada aplicación web y móvil que tengo la oportunidad de construir. </p>
        <p>A pesar de mi enfoque principal en el frontend, también tengo sólidos conocimientos en desarrollo backend. Esta combinación de habilidades me permite no solo diseñar interfaces agradables, sino también crear bases sólidas y eficientes que sustentan el funcionamiento impecable de las aplicaciones. </p>
        <p>Mi experiencia se basa en diversos proyectos, desde iniciativas personales hasta problemas planteados por la universidad a la que pertenezco. Estos proyectos son los que me han permitido explorar nuevas tecnologías, utilizar distintas metodologías y enfrentar desafíos complejos con creatividad y determinación. </p>

        <h2>Tecnologías</h2>
        Varias herramientas que he utilizado a lo largo de mi aprendizaje son:
        Lenguajes: Python, JavaScript, TypeScript, Java, PHP
        Frameworks: React, React Native, Angular, Node.js, Bootstrap
        Bases de datos: MySQL, Firebase, SQL Server, Oracle, MongoDB
        Gestores de proyectos: Jira, Asana, Trello, ClickUp
        Herramientas de diseño: Figma, Adobe XD, Photoshop

        <h2>Portafolio</h2>
        Entre los proyectos que considero que destacan mejor mis habilidades están:
        Aplicaciones móviles:
        Safey!: Aplicación móvil para control de pasajeros y gestión de viejes de buses interprovinciales.
        Esta aplicación se divide en dos roles:
        Comprar boletos que pertenece al rol de pasajero: https://github.com/Keybrish/ProyectoAppBusesPasajero
        Control de pasajeros que pertenece al rol de socio: https://github.com/Keybrish/ProyectoAppBusesSocio

        MANGIONA: Sistema web que gestiona pedidos de pizzas: https://github.com/Keybrish/pizza
        Facturando: Aplicación móvil que simula un facturador básico: https://github.com/YadiraAllauca/FacturaMovilGCS

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
