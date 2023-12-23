import "../css/contact.css"

export default function Contact() {
  return (
    <div className="s">
      <div className="main_image">
          <img className="fond_contact" src="./images/letter.jpg" alt="arrière plan"/>
            <div className="overlay"></div>
      </div>
      <div className="formulaire_contact">
        <h1 className='text-center'>ME CONTACTER</h1>
        <p className='text-center'>Pour me contacter en vue d'un entretien ou d'une futur collaboration, merci de remplir le formulaire de contact</p>
        <div className='contact-titre'></div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-5 col-12">
            <h2>Formulaire de contact</h2>
            <div className='contact-lign'></div>
            <form action="">              
                <div className='mb-3'>
                    <input className="form-control" type="text" placeholder="Votre nom" required/>
                </div>
                <div className='mb-3'>
                    <input className="form-control" placeholder="Votre adresse mail" required/>
                </div>
                <div className='mb-3'>
                    <input className="form-control" placeholder="Votre numéro de téléphone" required/>
                </div>
                <div className='mb-3'>
                    <input className="form-control" placeholder="Sujet" required/>
                </div>
                <div className='mb-3'>
                    <textarea className="form-control" name="" id="" cols="45" rows="5" placeholder="Votre message" required></textarea>
                </div>
                <div className='text-center'>
                  <button className="button" type='submit'>Envoyer</button> 
                </div>  
            </form>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <h2>Mes coordonnées</h2>
            <div className='contact-lign'></div>
            <address>
              <i className="fa-solid fa-location-dot"></i>40 Rue Laure Diebold, 69009 Lyon, France<br></br>
              <i className="fa-solid fa-mobile-screen-button"></i>06 20 30 40 50             
            </address>
            <iframe title="Adresse de John Doe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1702153834798!5m2!1sfr!2sfr" ></iframe>
          </div>
        </div>          
      </div>
    </div>
  );
}
