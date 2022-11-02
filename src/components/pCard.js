import React from 'react';
import './styles/projectInfo.css';

function pCard(props) {
  return (
    <div className="containerr">
        <div id="pCard" className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap" style={{height:200}}/>
            <div className="card-body">
            <h3 className="card-title" style={{color:'rgb(66, 133, 91)'}}>{props.title}</h3>
            <p className="card-text" style={{fontSize:18}}>{props.text}</p>
            <button type="button" class="btn btn-outline-success p-3" style={{backgroundColor:'rgb(66, 133, 91)',color:'white',position:'absolute',right:10,bottom:10,fontSize:15}}>Detaylar</button>
            </div>
        </div>
    </div>
   
  );
}

export default pCard;
