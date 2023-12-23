import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../css/portfolio.css';

function PortfolioOne() {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src="./images/vegetables.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Fresh food</Card.Title>
        <Card.Text>
          Réalisation d’un site avec commande en ligne.
        </Card.Text>
        <Button variant="outline-primary">Voir</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Site réalisé avec PHP et MySQL
      </ListGroup>
    </Card>
  );
}

export { PortfolioOne };

function PortfolioTwo() {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src="./images/sushi.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Restaurant Akira</Card.Title>
        <Card.Text>
          Réalisation d’un site vitrine.
        </Card.Text>
        <Button variant="outline-primary">Voir</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Site réalisé avec WordPress
      </ListGroup>
    </Card>
  );
}

export { PortfolioTwo };

function PortfolioThree() {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src="./images/zen.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Espace bien-être</Card.Title>
        <Card.Text>
          Réalisation d’un site vitrine un patricien de bien-être.
        </Card.Text>
        <Button variant="outline-primary">Voir</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Site réalisé en HTML/CSS
      </ListGroup>
    </Card>
  );
}

export { PortfolioThree };

export default function Portfolio() {
    return (
      <div className="Portfolio">
        <section className="Portfolio_image">
          <img className="image_fond" src="./images/haut.jpg" alt="haut de page"/>
        </section>
        <section className="text-center p-4">
          <div className="container">
            <h1 className="title_service">PORTFOLIO</h1>
            <p className="subtitle">Voici quelques-unes de mes réalisations.</p>            
            <div className='deroul-lign'></div>
            
            <div className="row justify-content-center">
              <article className="col-md-6 col-lg-4 mb-5 center-content">            
                <PortfolioOne />
              </article>
              <article className="col-md-6 col-lg-4 mb-5 center-content">
                <PortfolioTwo />
              </article>
              <article className="col-md-6 col-lg-4 mb-5 center-content">
                <PortfolioThree />
              </article>
            </div>
          </div>            
        </section>        
      </div>
    );
  }