import "../css/service.css";

import Card from 'react-bootstrap/Card';

function Design() {
  return (
    <Card className="card_hover" style={{ width: '18rem', textAlign: 'center', height: '250px' }}>
      <Card.Body>  
        <i className="fa-solid fa-desktop fa-2xl image_service"></i>      
        <Card.Title className="mb-2 text-muted" style={{ fontWeight: 'bold', paddingTop:'20px' }}>UX DESIGN</Card.Title>
        <Card.Text>
          L'UX Design est une méthode de conception centrée sur l'utilisateur. 
          Son but est d'offrir une expérience de navigation optimale à l'internaute
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { Design };

function Developpement() {
  return (
    <Card className="card_hover" style={{ width: '18rem', textAlign: 'center', height: '250px' }}>
      <Card.Body>
      <i className="fa-solid fa-file-code fa-2xl image_service"></i>
        <Card.Title className="mb-2 text-muted" style={{ fontWeight: 'bold', paddingTop:'20px' }}>DEVELOPPEMENT WEB</Card.Title>
        <Card.Text>
          Le développement de sites web repose sur l'utilisation des langages HTML, CSS, Javascript et PHP
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { Developpement };

function Reference() {
  return (
    <Card className="card_hover" style={{ width: '18rem', textAlign: 'center', height: '250px' }}>
      <Card.Body>
      <i className="fa-solid fa-magnifying-glass-dollar fa-2xl image_service"></i>
        <Card.Title className="mb-2 text-muted" style={{ fontWeight: 'bold', paddingTop:'20px' }}>REFERENCEMENT</Card.Title>
        <Card.Text>
          Le référencement naturel d'un site, aussi appelé SEO, 
          constite à mettre des techniques en oeuvre pour améliorer 
          sa position dans les résultats des moterus de recherche.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { Reference };

export default function Service() {
    return (
      <div className="Service_container">
          <section className="service_image">
            <img className="image_fond" src="./images/haut.jpg" alt="haut de page"/>
          </section>
          <section className="text-center p-4">
            <div className="container">
                <h1 className="title_service">MON OFFRE DE SERVICE</h1>
                <p className="subtitle">Voici les prestations sur lesquelles je peux intervenir.</p>          
                <div className='deroul-lign'></div>

              <div className="row justify-content-center">
                <article className="col-md-6 col-lg-4 mb-5 center-content">            
                  <Design />
                </article>
                <article className="col-md-6 col-lg-4 mb-5 center-content">
                  <Developpement />
                </article>
                <article className="col-md-6 col-lg-4 mb-5 center-content">
                  <Reference />
                </article>
              </div>
            </div>
          </section>            
      </div>
    );
  }