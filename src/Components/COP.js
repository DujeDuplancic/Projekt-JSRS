import React from 'react';
import './Drugi.css';
import steam from './steam.png'
function COP() {
  return (
    <div>
    <div className="grid-container">
      <div className="left-column">
        <h1>S.T.A.L.K.E.R Call of Pripyat</h1>
        <iframe src="https://www.youtube.com/embed/YKs_wTo2xs8?si=ZAGg4k6wTLZ-YWeT" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
      </div>
      <div className="right-column">
      <p>S.T.A.L.K.E.R.: Call of Pripyat je izravni nastavak igre S.T.A.L.K.E.R.: Shadow of Chernobyl. Kao major Alexander Degtyarev trebate istražiti pad vladačkih helikoptera oko Zone i saznati što se tamo dogodilo.</p><br></br>
      <p>NAJNOVIJE RECENZIJE:</p>
      <p>Vrlo pozitivno (237)</p><br></br>
      <p>SVE RECENZIJE:</p>
      <p>Vrlo pozitivno (21,418) *</p><br></br>
      <p>DATUM IZLASKA:</p>
      <p>12. veljače 2010.</p><br></br>
      <p>RAZVOJNI TIM:</p>
      <p>GSC Game World</p><br></br>
      <p>IZDAVAČ:</p>
      <p>GSC Game World</p><br></br>
      <a href='https://store.steampowered.com/app/41700/STALKER_Call_of_Pripyat/'><img src={steam} alt="Steam" className='steam'></img></a>
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

export default COP;
