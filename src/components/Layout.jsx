import { Outlet, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "../css/home.css"

function scrollToTop(event){
  event.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function MenuBurger() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} variant="dark" expand={expand} className="mb-3">
          <Container fluid style={{ backgroundColor: '#444' }} >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ backgroundColor: '#444', color: 'white', marginLeft: 'auto' }} />
            <Navbar.Offcanvas  
              style={{ height: '380px', width: '200px' }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header style={{ backgroundColor: '#444', color: 'white'}} closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  JOHN DOE                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: '#444', color: 'white'}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link className="text-uppercase nav-link" to="/">Accueil</Link></Nav.Link>
                  <Nav.Link><Link className="text-uppercase nav-link" to="/services">Services</Link></Nav.Link>
                  <Nav.Link><Link className="text-uppercase nav-link" to="/portfolio">Réalisations</Link></Nav.Link> 
                  <Nav.Link><Link className="text-uppercase nav-link" to="/blog">Blog</Link></Nav.Link> 
                  <Nav.Link><Link className="text-uppercase nav-link" to="/contact">Me contacter</Link></Nav.Link>   
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export {MenuBurger};

export default function Layout() {
const [user, setUser] = useState(null);
  const getUser = async () => {
  const res = await fetch("https://api.github.com/users/github-john-doe");
  const userData = await res.json();
  setUser(userData);
  };
  useEffect(() => {
  getUser();
  }, []);

    return (
        <>
            <header className="App-header">
              <div className="background"></div>
                <div className="header-content">
                  <div className="logo"><Link className="text-uppercase m-3 mr-3 nav-link" to="/">JOHN DOE</Link></div>
                    <nav class="menu">                
                      <ul>
                          <li><Link className="text-uppercase m-3 mr-3 nav-link" to="/">Accueil</Link></li>
                          <li><Link className="text-uppercase m-3 mr-3 nav-link" to="/services">Services</Link></li>
                          <li><Link className="text-uppercase m-3 mr-3 nav-link" to="/portfolio">Réalisations</Link></li>
                          <li><Link className="text-uppercase m-3 mr-3 nav-link" to="/blog">Blog</Link></li>
                          <li><Link className="text-uppercase m-3 mr-3 nav-link" to="/contact">Me contacter</Link></li>
                      </ul>                  
                    </nav> 
                      <div className="burger">
                          <MenuBurger/>                      
                      </div>              
                </div>
            </header>
            <Outlet />
            <footer className="App-footer">  
              <div className="container-fluid">
                <div className="footer-content row justify-content-center">
                    {user && (
                      /* Article fiche */
                      <article className="col-sm-6 col-lg-3 mb-4">    
                          <span className="titre-article">{user.name}</span>                                                       
                          <address>
                              <span>40 Rue Laure Diebold</span><br/>
                              <span>69009 Lyon, France</span><br/>
                              <span>Téléphone : 06 20 30 40 50</span>
                          </address>                              
                          <Link to={user.html_url} rel="nofollow" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></Link> 
                          <Link to="https://twitter.com/?lang=fr" rel="nofollow" target="_blank"><i class="fa-brands fa-square-twitter fa-2xl"></i></Link>
                          <Link to="https://fr.linkedin.com/" rel="nofollow" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></Link>  
                      </article>
                    )}
                    {/* Article Liens utiles */}
                      <article className="col-sm-6 col-lg-3 mb-4">
                          <span className="titre-article">Liens utiles</span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/">Accueil</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/">A propos</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/services">Services</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/contact">Me contacter</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/mentions">Mentions légales</Link></span>
                      </article>
                      {/* Article Mes dernières réalisations */}
                      <article className="col-sm-6 col-lg-3 mb-4">
                          <span className="titre-article">Mes dernières réalisations</span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/portfolio">Fresh food</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/portfolio">Restaurant Akira</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/portfolio">Espace bien-être</Link></span>
                      </article>
                      {/* Article Mes derniers articles */}
                      <article className="col-sm-6 col-lg-3 mb-4">
                          <span className="titre-article">Mes derniers articles</span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/blog">Coder son site en HTML/CSS</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/blog">Vendre ses produits sur le web</Link></span><br/>
                          <span className="footer_span">&gt;<Link className="footer_link" to="/blog">Se positionner sur Google</Link></span>
                      </article>   
                  </div>  
                  <div className="bottom-bar">
                      <div className="credits"><a  onClick={(event) => scrollToTop(event)}>&copy; Designed by John Doe</a></div>
                  </div>
                </div> 
            </footer>
        </>
    )
}
