import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet';
import '../css/mention.css';

export function MentionPage(){
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow"/>
      </Helmet>
    </div>
  )
}

function AllCollapseExample() {
  return (
    <div className='deroul'>
      <div className="text-center"> {/*deroul-title*/}
        <h1 className="text-uppercase">Mentions légales</h1>
      </div>  
      <div className='deroul-lign'></div>

      <div className='deroul-accordion'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body>
              <h1>John Doe</h1>
              <address>
                  <span><i class="fa-solid fa-location-dot"></i>40 Rue Laure Diebold</span><br/>
                  <span>69009 Lyon, France</span><br/>
                  <span><i class="fa-solid fa-mobile-screen-button"></i><a className="accordion_link" href="tel:06 20 30 40 50">06 20 30 40 50</a></span><br/>
                  <span><i class="fa-solid fa-envelope"></i><a className="accordion_link" href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></span>
              </address>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h1>Always Data</h1>
              <address>
                  <span>91 rue du Faubourg Saint Honoré</span><br/>
                  <span>75008 Paris</span><br/>
                  <span><i class="fa-solid fa-globe"></i><a className="accordion_link" target='_blank' href="https://www.alwaysdata.com">www.alwaysdata.com</a></span>
              </address>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h1>Crédits</h1>
              <p>Site développé par John Doe, étudiant du CEF</p>
              <p>Les images libres de droit sont issues du sites <a className="accordion_link" target='_blank' href="https://pixabay.com/fr/">Pixabay</a></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>      
    </div>    
  );
}

export default AllCollapseExample;