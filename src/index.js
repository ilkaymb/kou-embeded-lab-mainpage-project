import React from 'react';
import ReactDOM from 'react-dom/client';

import NavBar from './components/navBar';
import Logo from './components/logo-header';
import Card from './components/card';
import ProjectInfo from './components/projectInfo';
import Statistics from './components/statistics';
import TeamInfo from './components/teamInfo';
import Map from './components/map';
import Bottom from './components/bottom'
import AllRigth from './components/allRigths';

import Collapse from './components/collapse';

import EyeDraw from './images/EyeDraw.png';
import BrainDraw from './images/BrainDraw.png';
import SoftwareDraw from './images/SoftwareDraw.png';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <NavBar />
      <Logo />
        <div className="container">
          <div className="row">
            <div className="col">
            <Collapse images={EyeDraw} >
           
            <Card 
            cardTitle="Bilgisayarlı Görü" 
            cardText="Farklı alanlardaki çeşitli ihtiyaçlar için derin öğrenme modellerine dayalı nesne tanımlama sistemleri geliştiriyoruz. Bilgisayarlı görü ekibimiz, görüntü, video ve akış girdileri üzerindeki nesneleri algılamak ve tespit etmek için çeşitli modüler çözümler geliştirmektedir."
            />
            </Collapse>
            </div>
            <div className="col">
            <Collapse images={BrainDraw}>
            <Card 
            cardTitle="Yapay Zeka Çözümleri" 
            cardText="Gömülü sistemler laboratuvarı içerisinde yapay zekâ alanında Makine Öğrenmesi, Derin Öğrenme, Doğal Dil İşleme ve Bilgisayarlı Görü gibi alanlardaki bilgi birikimlerinden faydalanarak işletmelerin sorunlarına ve isterlerine ideal ve etkili çözümler üretilmektedir."
            /> 
            </Collapse>           
            </div>
            <div className="col">
            <Collapse images={SoftwareDraw}>
            <Card 
            cardTitle="Yazılım Geliştirme" 
            cardText="Yazılım geliştirme ekibimiz ile işletmelerin isteğine göre geliştirilecek projenin zamanını ve maliyetini tahmin etmekte ve sonrasında ürün tasarımı ve geliştirme aşamalarını gerçekleştirmekteyiz. Son aşamada ürünün test sürecini tamamlayıp projeyi teslime hazır hale getirmekteyiz."
            />     
            </Collapse>      
             </div>
          </div>
        </div>
     
        <ProjectInfo />
       
        <TeamInfo/>
       
        <Map/>
      
        <Bottom/>
        
        <AllRigth/>
  </div>
);


