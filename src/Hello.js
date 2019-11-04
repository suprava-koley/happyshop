import React from 'react';

const Hello = () =>{
    return(
        <div>
            <div className="pa4 tc grow">
                <img src="http://tachyons.io/img/logo.jpg"
                    className="br-100 h3 w3 dib" alt="avatar"/>
            </div>
            
            <h2 style={{ color: "black"} } className='tc mt2 mb0 baskerville i fw1 f1 '>happyshop</h2>
            <h2 style={{ color: "white"} } className="mt2 mb0 f6 fw4 ttu tracked bb">Your amazing shop</h2>
   
        </div>
    );
}
export default Hello;