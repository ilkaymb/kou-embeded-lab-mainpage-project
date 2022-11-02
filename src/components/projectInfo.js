import React,{useState} from 'react';
import ProjectCard from './pCard';
import './styles/projectInfo.css';

//navigatorla diğer sayfaları yapmayı öğren.

function ProjectInfo() {

    const [state, setState] = useState(1);

    function PageState(number){//binding kullanmadan kullanılabilir.
        if(number == 0 )
        {
            if(state !=1)
            setState(current => current-1);
        }
        else if(number == 5)
        {
            if(state !=4)
            setState(current => current+1);
        }
        else
        setState(current => number);

    }


    function Select() {
        switch(state) {
          case 1:
            return ( 
             <div>
                <div className="row" id="ProjectCard">
                <div className="col">
                <ProjectCard
                image="http://embedded.kocaeli.edu.tr/wp-content/uploads/2022/03/yasakli-alan.png"
                title="Yasaklı Alan İhlali Tespiti"
                text="Fabrikadaki forklift kazalarını gidermek amacıyla belirlenen alanlarda aynı anda forklift ve insan bulunma anında Ford Otosanın serverlerına ve ortamın alarm sistemine uyarı mesajı gönderilecektir."/>
                </div>  
                <div className="col">
                  <ProjectCard
                    image="http://embedded.kocaeli.edu.tr/wp-content/uploads/2022/03/dijital-gosterge.jpg"   
                   title="Dijital Gösterge"
                    text="Günümüzde birçok sistem akıllı hale gelmişken yakıt olarak tüp kullanılacak araçlarda çok ilkel bir gösterge bulunmaktadır. Bunun doğruluğu da kullanıcılar tarafından çok şüphe uyandırmaktadır. Bu konudaki piyasadaki büyük eksiğin yeri kapatılması adına Akıllı bir gösterge tasarımı yapılmıştır."/>   
                  </div>  
                  </div> 
                  </div>)
          case 2:
            return ( 
              <div >

                <div className="row" id="ProjectCard">
                <div className="col">
                <ProjectCard
                image="http://embedded.kocaeli.edu.tr/wp-content/uploads/2022/03/tup-gorseli.jpg"
                title="Tüp Kirlilik Tespiti"
                text="Projede tüplerin üzerindeki kirli bölgelerin tespiti ve bu bölgelerin oranının hesaplanması amaçlanmaktadır.
                "/>
                </div>  
                <div className="col">
                  <ProjectCard
                    image="	http://embedded.kocaeli.edu.tr/wp-content/uploads/2021/09/matas.jpg"   
                   title="Müzeler İçin Akıllı Takip Sistemi"
                    text="Bu proje kapsamında müzelerdeki eserlere ait bilgiler, eserlerin yanında bulunan tabletler üzerinde görsel ve işitsel bir şekilde çok dilli olarak verilmesi amaçlanmıştır."/>   
                  </div>  
                  </div>  

                  </div>)
          case 3:
            return  ( 
              <div id="ProjectCard">

                <div className="row" id="ProjectCard">
                <div className="col">
                <ProjectCard
                image="	http://embedded.kocaeli.edu.tr/wp-content/uploads/2021/09/hastane-arsiv-otomasyonu-1200x500.jpg"
                title="Hastane Arşiv Otomasyonu"
                text="Bu projede, Kocaeli Üniversitesi Araştırma Hastanesi'ne gelen hastaların dosyalarının(Hasta yatış formu, ameliyat notları, raporlar vb.) dijital ortamda arşivlenerek hasta takibinin yapılması amaçlanmıştır."/>
                </div>  
                <div className="col">
                  <ProjectCard
                    image="http://embedded.kocaeli.edu.tr/wp-content/uploads/2022/04/tup-yakasi-projesi.jpg"   
                   title="Aygaz Tüp Yakası Okuma"
                    text="Bu proje, tüplerin yaka kısmında yer alan tüp kimlik verilerinin OCR tekniği kullanılarak insan gücüne ihtiyaç kalmadan elde edilebilmesi amacıyla yapılmıştır."/>   
                  </div>  
                  </div>  

                  </div> )
            case 4:
                return ( 
                  <div id="ProjectCard">

                <div className="row" id="ProjectCard">
                <div className="col">
                <ProjectCard
                image="	http://embedded.kocaeli.edu.tr/wp-content/uploads/2022/03/lidar-tup-yukleme-otomasyonu.jpg"
                title="Lidar ile Tüp Yükleme Otomasyonu"
                text="Proje endüstri 4.0 karanlık fabrika için üretilen bir projedir. Tesiste sürecini tamamlayan tüplerin kasaya yüklenme aşamasında otonom ve sürekli çalışan bir sistem istenmektedir. Bu sistemin çözüm bulabilmesi adına birçok parametre göz önüne alınarak Lidar kullanılması uygun görülmüştür."/>
                </div>  
                <div className="col">
                <button className="btn btn-primary w-100 m-2" style={{fontSize: 25,borderRadius:0,backgroundColor:'rgb(66, 133, 91)',display: 'table-cell',verticalAlign:'middle',height:100}}>
                Tüm Projeleri İncele
                </button>
                  </div>  
                  </div>  

                  </div>  
                 )
            return 
          default:
            return null
        }
      }

  return (
 <div style={{backgroundColor:'rgb(231, 246, 242)',paddingTop:30,paddingBottom:40}}>
    <center>
        <h1 id="header" style={{textAlign:'center'}}>
            Projelerimiz
        </h1>
    </center>
    <div id="PI"className="PI container">
    <nav aria-label="Page navigation example" style={{textAlign:'right'}}>
        <ul className="pagination">
            <li className="page-item">
            <a className="page-link" href="#PrevPage" aria-label="Previous" onClick={() => PageState(0)}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </a>
            </li>
            <li className="page-item"><a className="page-link" href="#page1"onClick={() => PageState(1)}>1</a></li>
            <li className="page-item" ><a className="page-link" href="#page2"onClick={() => PageState(2)}>2</a></li>
            <li className="page-item"><a className="page-link" href="#page3"onClick={() => PageState(3)}>3</a></li>
            <li className="page-item"><a className="page-link" href="#page4"onClick={() => PageState(4)}>4</a></li>
            <li className="page-item">
            <a className="page-link" href="#NextPage" aria-label="Next"  onClick={() => PageState(5)}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </a>
            </li>
        </ul>
</nav>
</div>        <div className="container" >
                  {
                    Select()
                  }
         </div>
         </div>



  );
}

export default ProjectInfo;
