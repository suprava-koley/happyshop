import React, { Component } from 'react';

class Links extends Component {
  constructor() {
    super();
    
    this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu() {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  
    render() {
      return (
        <div >
          <button  className=' fc-white'onClick={this.showMenu}>
            Show menu
          </button>
          <button  className=' fc-white'onClick={this.showMenu}>
            Show menu
          </button>
          
          {
            this.state.showMenu
              ? (
                <div className="menu">
                  <p> Menu item 1 </p>
                  <p> Menu item 2 </p>
                  <p> Menu item 3 </p>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }
  export default Links;