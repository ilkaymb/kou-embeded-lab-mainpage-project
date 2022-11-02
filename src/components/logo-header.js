//import './App.css';
import React from 'react';
import './styles/logoHeader.css'
//
function logo_header() {
  return (
      <div id="logo-background" className="container-fluid">
           <center className=" pt-5" >
            <img src="http://embedded.kocaeli.edu.tr/wp-content/uploads/2019/06/logo6.png" className="tp-rs-img "  dataSrc-rs-ref="http://embedded.kocaeli.edu.tr/wp-content/uploads/2019/06/logo6.png"style={{ position:'relative' ,height:150 ,width:150}}></img>            
                      <h2 style={{color:'green'}}>KOCAELİ ÜNİVERSİTESİ</h2>              
                       <h1 style={{color:'white'}}>GÖMÜLÜ SİSTEMLER<br/>LABORATUVARI</h1>
            </center>               
                            
                           
          
       </div>


  );
}

export default logo_header;
