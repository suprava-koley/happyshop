import React from 'react';

const Inc=({add,remove})=>{
    
         return(
        // countIncrease=()=>{
            // const value= this.state.count===0? 'zero':this.state.count;
  
             <div>
                 <span><button  onClick={(e)=>add(e)} >+</button><button  onClick={(e)=>remove(e)}>-</button></span>
                 {/* <p>{value}</p><button  className="badge badge-secondary badge-lg m-2" onClick={this.IcreamentVlaue}>+</button><button  className="badge badge-secondary"onClick={this.DecreamentVlaue}>-</button> */}
                
             </div>
        );
    

   
    
    
}
//  function value(event){
//     let c
//     return c=c+1;
// }
export default Inc;