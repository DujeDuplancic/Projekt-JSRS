import React from 'react';
import './Drugi.css';
import steam from './steam.png'
function SOC() {
  return (
    <div>
    <div className="grid-container">
      <div className="left-column">
        <h1>S.T.A.L.K.E.R Shadow of Chernobyl</h1>
        <iframe
          src="https://www.youtube.com/embed/30TbykKCzsE?si=5HlHxb8TuZ61S7UF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="right-column">
      <p>S.T.A.L.K.E.R.: Shadow of Chernobyl govori priču o preživljavanju u Zoni - vrlo opasnom mjestu, gdje se bojite ne samo radijacije, anomalija i smrtonosnih stvorenja, već i drugih S.T.A.L.K.E.R.-a, koji imaju svoje ciljeve i želje.</p><br></br>
      <p>NAJNOVIJE RECENZIJE:</p>
      <p>Vrlo pozitivno (455)</p><br></br>
      <p>SVE RECENZIJE:</p>
      <p>Vrlo pozitivno (31,498) *</p><br></br>
      <p>DATUM IZLASKA:</p>
      <p>20. ožujka 2007.</p><br></br>
      <p>RAZVOJNI TIM:</p>
      <p>GSC Game World</p><br></br>
      <p>IZDAVAČ:</p>
      <p>GSC Game World</p><br></br>
      <a href='https://store.steampowered.com/app/4500/STALKER_Shadow_of_Chernobyl/'><img src={steam} className='steam'></img></a>
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

export default SOC;

