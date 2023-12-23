import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import '../css/home.css';

function BarProgess() {
  return (
    <div>
      <p>HTML5 90%</p>
      <ProgressBar variant="danger" now={90} />
      <p>CSS3 80%</p>
      <ProgressBar variant="info" now={80} />
      <p>Javascript 70%</p>
      <ProgressBar variant="warning" now={70} />
      <p>PHP 60%</p>
      <ProgressBar variant="success" now={60} />
      <p>REACT 50%</p>
      <ProgressBar variant="primary" now={50} />
    </div>
  );
}
export { BarProgess };

function ButtonTitre() {
  return (
    <>
      <Button href="#ancrage">En savoir plus</Button>
    </>
  );
}

export {ButtonTitre};

function Titre(props){
  return(
    <h1>Bonjour, je suis {props.prenom} {props.nom}</h1>
  );
}

function Home() {
   return (
    <div>
        <main className="App-main">
            <div className='container_image'>
                <img className='image_fond' src="./images/fond.jpg" alt="Arrière plan" />
                <div className='titre_accueil'>
                      <Titre prenom="John" nom="Doe"/>
                      <h2>Développeur web full stack</h2>
                      <ButtonTitre/>
                </div>            
            </div>
            <div className='container'>
              <div className="row justify-content-center content-home">
                  <article className="col-lg-6 col-md-6 col-12" id="ancrage">
                    <h2>A propos</h2>
                    <div className='about-lign'></div>
                    <p>Passionné par l’informatique et les nouvelles
                    technologies, j’ai suivi une formation d’<strong>ingénieur-développeur web</strong> au CEF.
                    Au cours de cette formation,
                    j’ai pu acquérir des bases solides pour travailler dans le
                    domaine de <strong>développement web</strong>. <br/><br/>
                                
                    Basé à Lyon, je suis en recherche d’une alternance au
                    sein d’une agence digitale pour consolider ma formation
                    de <strong>développeur web full stack</strong>.<br/><br/>
                                
                    J’accorde une attention particulière à la qualité du code
                    que j’écris et je respecte les bonnes pratiques du web. </p>
                  </article>
                  <article className="col-lg-6 col-md-6 col-12">
                    <img className="image_competence" src="./images/competence.jpg" alt="mes compétences"/>
                    <h2>Mes compétences</h2>
                    <BarProgess />
                  </article>
              </div>
            </div>            
        </main>      
    </div>
  );
}
  
export default Home;