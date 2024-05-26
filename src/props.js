import './App.css';
import Kratko from './kratko'; 
function Props(){
    let props={ocjena1:"9/10",cijena1:"20$",datum1:"2007.",programeri:"GSC"
        ,ocjena2:"9/10",cijena2:"10$",datum2:"2008."
        ,ocjena3:"10/10",cijena3:"25$",datum3:"2010."
    }
    return(
        <Kratko pr={props}></Kratko>
    );
}
export default Props;
/* Stranica u kojoj određujemo props (Roditelj) */