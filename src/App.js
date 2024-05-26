import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';/*Uvođenje rutera*/

import SOC from './Components/SOC';
import CS from './Components/CS';
import COP from './Components/COP';
import GSC from './Components/GSC';
import Login from './Components/Logins';/* Uvođenje sporednih stranica iz mape Components (4 function i 1 class komponenta)*/ 

import Soc from "./Components/soc.jpg";
import Cop from "./Components/cop.jpg";
import Cs from "./Components/cs.jpg"
import Stalker2 from "./Components/stalker2.jpg"
import Gsclogo from "./Components/gsclogo.jpg"
import Slika from "./logo.jpg"/* Uvođeje slika */

import Props from './props';/*Importanje propsa */
function Navigation() {


  return (/* Stvaranje Headera */
    <div>
      <div className='Header'>
        <Link to='/'><img src={Slika} alt="logo" className='logo'/></Link>
          <nav>
            <ul>
              <li>
                <Link to="/soc">SOC</Link>
              </li>
              <li>
                <Link to="/cs">CS</Link>
              </li>
              <li>
              <Link to="/cop">COP</Link>
              </li>
              <li>
              <Link to="/gsc">GSC</Link>
              </li>
              <li>
              <Link to="/login">Prijavi se</Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );/* Stvaranje navigacijskog bar-a za odlazak na sporedne stranice (Header). */
}

function App() {
  return (/*Stvaranje navigacijskog sistema pomoču rutera da nas vodi s glavne na sporednu stranicu.*/
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soc" element={<SOC />} />
          <Route path="/cs" element={<CS />} />
          <Route path="/cop" element={<COP />} />
          <Route path="/gsc" element={<GSC />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  /* U ovoj funkciji imamo dva kontenjera koji sadrže dva grid sustava kako bi div-ovi na stranici bili bolje ugrađeni za napredniji dizajn.
  Također u trečem row-u uvozimo Props komponentu.
  */
  return (
    <div>
      
      <div className="Tijelo">
        <div className="container">
            <div className="column">
                <h2>S.T.A.L.K.E.R.: Shadow of Chernobyl</h2>
                <p>S.T.A.L.K.E.R.: Shadow of Chernobyl je pucačina iz prvog lica, survival horor video igra koju je razvio GSC Game World, a objavio THQ 2007. nakon dugog razvoja. Igra je smještena u alternativnu stvarnost, gdje se dogodila druga katastrofa tajanstvenog porijekla u Černobilskoj isključenoj zoni, uzrokujući čudne promjene u području oko nje.</p>
                <Link to='/soc'><img src={Soc} className="igre"></img></Link>
            </div>

            <div className="column">
            <h2>S.T.A.L.K.E.R.: Clear Sky</h2>
            <p>S.T.A.L.K.E.R.: Clear Sky je akcijska pucačina iz prvog lica s elementima preživljavanja nastala 2008. godine. Razvila ju je kompanija GSC Game World, a objavila kompanija Deep Silver kao prequel S.T.A.L.K.E.R.: Shadow of Chernobyl.Priča vam priču o grupi Clear Sky koja želi istražiti Zonu i bolje je razumjeti , te žele spriječiti ostale grupe da ne unište zonu.</p>
            <Link to='/cs'><img src={Cs} className="igre"></img></Link>
            </div>

            <div className="column">
            <h2>S.T.A.L.K.E.R.: Call of Pripyat</h2>
            <p>S.T.A.L.K.E.R.: Call Of Pripyat  je video igra preživljavanja u žanru pucačina iz prvog lica i horora, razvijena od strane kompanije GSC Game World za Microsoft Windows. To je treća igra iz serijala S.T.A.L.K.E.R., nakon S.T.A.L.K.E.R.: Shadow of Chornobyl i S.T.A.L.K.E.R.: Clear Sky, pri čemu se radnja i događaji igre nastavljaju na prethodne.</p>
            <Link to='/cop'><img src={Cop} className="igre"></img></Link>
            </div>
        </div>

        
        <div className="container2">
            <div className="row">
               <h2>S.T.A.L.K.E.R. 2: HEART OF CHORNOBYL</h2>
               <p>S.T.A.L.K.E.R. 2: Heart of Chornobyl nastavak je nove generacije nagrađivane franšize PC igara koju je razvio GSC Game World, a koja će pružiti jedinstveno akcijsko iskustvo preživljavanja u postapokaliptičnoj Chornobyl Exclusion Zone. Bit će to četvrta igra izdana u S.T.A.L.K.E.R. serije videoigara kao i prvi S.T.A.L.K.E.R. igra u 15 godina od objavljivanja Call of Pripyat 2009.</p> 
               <a href='https://www.stalker2.com/en'><img src={Stalker2} className="stalker2"></img></a>
            </div>

            <div className="row">
                <h2>GSC Game World</h2>
                <p>GSC Game World je ukrajinski programer videoigara s privremenim sjedištem u Pragu. Osnovan u Kijevu 1995. godine od strane Sergiya Grygorovycha, najpoznatiji je po "Cossacks" i S.T.A.L.K.E.R. niz igara. GSC Game World bila je prva tvrtka u Ukrajini koja je lokalizirala PC igre na ruski jezik. Godine 2002. postaje izdavačka kuća GSC World Publishing.</p>
                <Link to='/gsc'><img src={Gsclogo} className='img-gsc'></img></Link>
            </div>
            <div className="row" id='row3'>
                <h2>Ukratko</h2>
                <Props/>
            </div>

        </div>
      </div>

      
      <div className="footer">
            <h2>Kontaktirajte nas</h2>
          <p>Email: gsc-world@mail.com</p>
          <p>Phone: +1 234 567 890</p>
          <h2>Početak stranice</h2>
            <ul>
              <li><a href="#">Početak</a></li>
            </ul>
            <h2>Originalna S.T.A.L.K.E.R stranica</h2>
            <ul>
              <li><a href='https://www.stalker2.com/en'>S.T.A.L.K.E.R OG</a></li>
            </ul>
            <h2>Originalna stranica developera igrice</h2>
            <ul>
              <li><a href='https://www.gsc-game.com/'>GSC OG</a></li>
            </ul>
          
          Copyright © 2024 Duje Duplančić. All rights reserved.
          </div>
    </div>
  );/* Na dnu se nalazi footer koji sadrži linkove od originalne stvarne stranice ,te link koji vodi na vrh stranice.  */
}


export default App;
