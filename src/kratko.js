import './App.css'
export default function kratko({pr}){
    return (
        <table>
        <tr><th>S.T.A.L.K.E.R.:Shadow of Chernobyl</th></tr>
        <tr><td>Ocjena</td><td>Cijena</td><td>Datum Izdanja</td><td>Programerski tim</td></tr>
        <tr><td>{pr.ocjena1}</td><td>{pr.cijena1}</td><td>{pr.datum1}</td><td>{pr.programeri}</td></tr>
        <tr><th>S.T.A.L.K.E.R.:Clear Sky</th></tr>
        <tr><td>Ocjena</td><td>Cijena</td><td>Datum Izdanja</td><td>Programerski tim</td></tr>
        <tr><td>{pr.ocjena2}</td><td>{pr.cijena2}</td><td>{pr.datum2}</td><td>{pr.programeri}</td></tr>
        <tr><th>S.T.A.L.K.E.R.:Call of Pripyat </th></tr>
        <tr><td>Ocjena</td><td>Cijena</td><td>Datum Izdanja</td><td>Programerski tim</td></tr>
        <tr><td>{pr.ocjena3}</td><td>{pr.cijena3}</td><td>{pr.datum3}</td><td>{pr.programeri}</td></tr>
      </table>
    )
}
/* Ovo je stranica (dijete) koja služi da props koji imamo postavi u tablicu. */