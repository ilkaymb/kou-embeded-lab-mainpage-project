//import './App.css';
import React,{ useState } from 'react';
import './styles/navbar.css';



function NavBar() {
/*
    const [state, setState] = useState(false);

    function darkmode(){//binding kullanmadan kullanılabilir.
          

        if(state==true)
            {
                document.body.style.backgroundColor = 'white'; 
            }
            else if(state==false)
            {
                document.body.style.backgroundColor = 'red';
            }
               
            
            setState(current => !current);


    }
    */


    
  return (
      <div className="NavBar pt-5">
        <nav className="navbar navbar" >
    <ul className="nav nav-pills">
    <img src="http://embedded.kocaeli.edu.tr/wp-content/uploads/2019/06/logo6.png" className="tp-rs-img " dataSrc-rs-ref="http://embedded.kocaeli.edu.tr/wp-content/uploads/2019/06/logo6.png"style={{height:50 ,width:50,float:'center'}}/>
        <p className="navbar-brand ">KOU Embeded</p>
            <li className="nav-item ">
                <a className="nav-link " href="#">ANASAYFA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">DERSLER</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ARAŞTIRMA
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">PROJELERİMİZ</a>
                    <a className="dropdown-item" href="#">YAYINLARIMIZ</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                EKİBİMİZ
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                    <a className="dropdown-item" href="#">ÜYELER</a>
                    <a className="dropdown-item" href="#">MEZUNLAR</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">İŞBİRLİKÇİLERİMİZ</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">BROŞÜR</a>
            </li>
            <li className="nav-item">
            <a href="http://embedded.kocaeli.edu.tr/?page_id=1040569&amp;lang=en"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="English" width="16" height="11" style={{width: '16px', height: '11px'}}/></a>
            </li>
            <li className="nav-item">
            <div class="menu-custom-area">Kocaeli University<br/>Kocaeli, Turkey</div>
            </li>
       

         
            </ul>

</nav>


      </div>


  );
}
       //<button id="dark-mode-button"onClick={darkmode}>KARANLIK MOD</button>
export default NavBar;
