import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Mentions from './components/Mention';
import Contact from './components/Contact';
import Services from './components/Service';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="blog" element={<Blog/>}/>
            <Route path="mentions" element={<Mentions/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="services" element={<Services/>} />          
          </Route>
      </Routes>
    </div>
  );
}

export default App;
