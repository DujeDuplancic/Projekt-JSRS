import React from 'react';
import './Drugi.css';
import steam from './steam.png'
function CS() {
  return (
    <div>
    <div className="grid-container">
      <div className="left-column">
        <h1>S.T.A.L.K.E.R Clear Sky</h1>
        <iframe
        src="https://www.youtube.com/embed/IJzJU1638oc?si=8EZq8YINhJE4eJoo"
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="right-column">
      <p>S.T.A.L.K.E.R.: Clear Sky - samostalni prequel za priznati S.T.A.L.K.E.R.: Shadow of Chernobyl, koji vam priča priču o grupi Clear Sky, koja želi istražiti Zonu i bolje je razumjeti.</p><br></br>
      <p>NAJNOVIJE RECENZIJE:</p>
      <p>Vrlo pozitivno (169)</p><br></br>
      <p>SVE RECENZIJE:</p>
      <p>Vrlo pozitivno (14,189) *</p><br></br>
      <p>DATUM IZLASKA:</p>
      <p>15. rujna 2008.</p><br></br>
      <p>RAZVOJNI TIM:</p>
      <p>GSC Game World</p><br></br>
      <p>IZDAVAČ:</p>
      <p>GSC Game World</p><br></br>
      <a href='https://store.steampowered.com/app/20510/STALKER_Clear_Sky/'><img src={steam} alt="Steam" className='steam'></img></a>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <h2>Kontaktirajte nas</h2>
        <p>Email: gsc-world@mail.com</p>
        <p>Telefon: +1 234 567 890</p>
        <h2>Početak stranice</h2>
        <ul>
          <li>
            <a href="#">Početak</a>
          </li>
        </ul>
        <p>Autorska prava © 2023 Duje Duplančić. Sva prava pridržana.</p>
      </div>
    </footer>
    </div>
  );
}

export default CS;
