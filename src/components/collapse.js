import React,{ useState } from 'react';
import './styles/collapse.css'


function Collapse(props) {

    const [state, setState] = useState(false);

    function showMore(){//binding kullanmadan kullanılabilir.
        setState(current => !current);
    }
    //,borderRadius:50,borderBottomRightRadius: state ? 0 : 50,borderBottomLeftRadius: state ? 0 : 50,
//style={{borderBottomRightRadius:50,borderBottomLeftRadius:50}
        return (
            <div id="CardCollapse">
                <p style={{display:''}}>
                    <button className="CardButton dropdown-toggle w-100 p-4 mt-4" id={props.cardTitle} itemID="secondid" onClick={showMore} style={{fontSize: 22,borderRadius:0,backgroundColor:'rgb(66, 133, 91)',textAlign:'center'}}>
                        {React.Children.map(props.children, children => children.props.cardTitle)}
                        <img src={props.images} className="tp-rs-img "style={{height:60 ,width:60,padding: 5,backgroundColor:'white',float:'right',borderRadius: '50%'}}
                        ></img>            

                    </button>
                    <div>
                    {
                        state ? (
                          
                                <div className="card card-body" >
                                {React.Children.map(props.children, children => children)}
                                </div>
                       
                            ) : null
                    }
                    </div>
                </p>
                        
            </div>
        );
    }

export default Collapse;//export edilince çağırılabiliyor

