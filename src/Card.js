import React from 'react';
import Inc from './Inc';
// import list from './list';


const Card =({id,name,email,price,add,remove}) =>{
    //  const {name,email,price}=list;
    return(
               
        
                    // <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
                    //         <img alt='robots' src={`https://robohash.org/${id}?50*50`} />
            
                  <div className="bg-light-gray grow dib ma2 shadow-5  br2 bw2 mv4 w-100  mw5  mr4 center">
                   
                    <img src={process.env.PUBLIC_URL+"/images/t.jpeg"} alt="i"/> 
                      {/* <img src={`https://source.unsplash.com/${id}`} alt="pic"/>  */}
                    <div>
                            <span>{name}   rs.{price}</span>
                            <div>
                            <Inc add={add} remove={remove}/> 
                            </div>
                           
                            <button className="bg-orange btn-lg" onClick={(e)=>add(e)}>Add to Cart</button>   
                           <p>{email}</p>
                           
                    </div> 
                
            </div>
               
    );
}
export default Card;
