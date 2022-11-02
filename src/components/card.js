import React from 'react';

//borderBottomRightRadius:50,borderBottomLeftRadius:50
//className="Card"
function Card(props) {
  return (
    <div style={{height: 250,borderRadius:0}}>
    <div className="card-body w-100">
      <h3 className="card-title">
      </h3>
      <p className="card-text" style={{fontSize: 18,fontOpticalSizing:50,fontWeight:'normal'}}>{props.cardText}</p>
    </div>
  </div>
  );
}

export default Card;
