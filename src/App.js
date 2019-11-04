import React,{Component} from 'react';

import './App.css';
import Hello from './Hello';
import Search from './Search';
import CardList from './CardList';
import list from './list';
import Scroll from './Scroll';




class App extends Component{

  constructor(){
    super()
    this.state={
        count:0,
        list:list,
        searchfield:''
    }
}
IcreamentVlaue =(event)=>{
    this.setState({count:this.state.count+1});
}

DecreamentVlaue =()=>{
    this.setState({count:this.state.count-1});
}

  
  //  componentDidMount(){
  //    fetch('http://jsonplaceholder.typicode.com/users')
  //    .then(response=> response.json())
  //    .then(users => {this.setState({list :users})});
  //  }
 
   onSearchChange =(event)=>{
      this.setState({searchfield:event.target.value})
    }
   render(){
     
      const listItem = this.state.list.filter(el=>{
        return el.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())});
     
             return (
               <div className="bg-dark-gray">
                 <div className='tc'>
                    
                    <Hello /><br></br>
                    {/* <p>{this.state.count}</p> */}
                   <Search searchChange={this.onSearchChange} value={this.state.count}  />
                  <Scroll>
                   <CardList list={listItem} addtocart={this.IcreamentVlaue} remove={this.DecreamentVlaue} value={this.state.count} />
                  </Scroll>
                 </div>
               </div>
                   
             );  
 
}
}
export default App;
