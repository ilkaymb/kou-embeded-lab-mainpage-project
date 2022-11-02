import React from 'react';
import './styles/teamInfo.css'


function teamInfo() {
  return (
    <div className="container mb-5 mt-5" style={{backgroundColor:'rgb(66, 133, 91)',  transform: 'scale(1.025)',boxShadow: 'rgba(66, 133, 91, 0.5) 0px 5px 10px',borderRadius:50}}>
        <div id="teamInfo" className="row"style={{justifyContent:'center',alignItems:'center', display: 'flex'}}>
            <div className="col m-5 " style={{borderRight:'3px solid White'}}>
                <center style={{color:'white',marginTop:20}}>
                <img src="http://embedded.kocaeli.edu.tr/wp-content/uploads/2021/09/suhap-sahin.jpg" className="rounded-circle" alt="Doç. Dr. Suhap ŞAHİN" data-6310-hover-image="" data-wpm-6310-image-attr="http://embedded.kocaeli.edu.tr/wp-content/uploads/2021/09/suhap-sahin.jpg" style={{width:200,height:200,border:'4px solid white'}}/>
                <p style={{marginTop:20,fontSize:18}}>Linux, Gömülü Sistemler, Sayısal Tasarım, Bilgisayar Mimarisi<br/>Doç. Dr. Suhap ŞAHİN</p>
                <a href="mailto:suhapsahin@kocaeli.edu.tr" target="_blank" title="Email" id="wpm-social-link-7-37">
                <img srcset="https://img.icons8.com/ios-filled/344/filled-message.png" alt="icon" loading="lazy" style={{width: 50, height: 50}}/>
                    </a>
                </center>
            </div>
            <div className="col">
                 <center style={{color:'white',fontSize:20}}>
                    <p style={{color:'black',fontSize:25,fontWeight:'bold'}}>KOU GÖMÜLÜ SİSTEMLER</p>
                    <h1>EKİBİMİZ</h1>
                    <p>Daha iyisi için çalışıyoruz.</p>
                    <a id="rv1Qn" class="hc-cmp-button   active  btn-text " href="http://embedded.kocaeli.edu.tr/?page_id=165" style={{color:'black'}}>Tüm Ekibi Gör</a>
                </center>
            </div>         
        </div>
    </div>
   
  );
}

export default teamInfo;
