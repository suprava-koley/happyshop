import React from 'react'
// import Icon from 'react-native-ionicons';

const search =({searchChange,value}) => {
    
    return(
        <div className='bg-black'>
            <input onChange={searchChange} 
            className="tc br2 w-40"
             type="search" 
             placeholder="item"/>
             <p style={{color:"white"}}>cart:{value}</p>
             {/* <Text>Ionicons Icons</Text>
            <Icon name='md-bicycle' /> */}
        </div>
    );
}
export default search;