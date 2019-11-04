import React from 'react';
import Card from './Card';
// import Inc from './Inc';
// import list from './list';



const CardList =({list,addtocart,remove,value}) =>{
  
    return(
            <div>
            {
                list.map((user,i)=>{

                return <div>
                <Card  key={i}
                
                id={list[i].id}
                name={list[i].name}
                email={list[i].email}
                price={list[i].price}
                add={addtocart}
                remove={remove}
                value={value}/>
               
               
                </div> 
                })

            }
            </div>
    );
}
export default CardList;
