import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BlogOne() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/code.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Coder son site en HTML/CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 22 août 2022
      </ListGroup>
    </Card>
  );
}

export { BlogOne };

function BlogTwo() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/money.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Vendre ses produits sur le web</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 20 août 2022
      </ListGroup>
    </Card>
  );
}

export { BlogTwo };

function BlogThree() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/macbook.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Se positionner sur Google</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 1 août 2022
      </ListGroup>
    </Card>
  );
}

export { BlogThree };

function BlogFour() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/responsive.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Coder en responsive</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 31 juillet 2022
      </ListGroup>
    </Card>
  );
}

export { BlogFour };

function BlogFive() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/search.jpg" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Techniques de référencement</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 30 juillet 2022
      </ListGroup>
    </Card>
  );
}

export { BlogFive };

function BlogSix() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="./images/wordpress.png" />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>Apprendre à coder</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button style={{ width: '125px' }} variant="primary">Lire la suite</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        Publié le 12 juillet 2022
      </ListGroup>
    </Card>
  );
}

export { BlogSix };

export default function Blog() {
  return (
    <div className="Blog">
      <section className="Blog_image">
          <img className="image_fond" src="./images/haut.jpg" alt="haut de page"/>
      </section>  
      <section className="text-center p-4">
        <div className="container">
          <h1 className="title_service">BLOG</h1>
            <p className="subtitle">Retrouver ici quelques articles sur le développement web.</p>      
            <div className='deroul-lign'></div>

          <div className="row justify-content-center">
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogOne/>
            </article>
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogTwo/>
            </article>
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogThree/>
            </article>
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogFour/>
            </article>
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogFive/>
            </article>
            <article className="col-md-6 col-lg-4 mb-5 center-content">
              <BlogSix/>
            </article>
          </div>       
        </div>        
      </section>   
        
    </div>
  );
}
