import React from 'react';
import paste from './images/paste.png'
import './styles/myStyles.css'

function PasteBtn({setValue}){
    return(
        <button className='btn-paste'  style={{backgroundColor:"rgb(51,54,58)",border:"none"}} 
        onClick={() => navigator.clipboard.readText().then((clipText) => setValue(clipText))}
        ><img style={{backgroundColor:"rgb(51,54,58)"}} src={paste}></img>
        </button>
    );
}
export default PasteBtn;

