import React, { Component } from 'react';
import './App.css';

class App extends Component {
/*purpouse: to instiallized the states ==> constructor is used*/  
constructor(){
    super();
    this.state ={
   /*string*/   searchkey:"",
   /*array*/   cards:[
 {
    "id": 1,
    "title": "React",
    "category": "Library",
    "description": "A JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM."
  },
  {
    "id": 2,
    "title": "Angular",
    "category": "Framework",
    "description": "A comprehensive, TypeScript-based framework developed by Google for building complex, enterprise-level applications."
  },
  {
    "id": 3,
    "title": "Vue.js",
    "category": "Framework",
    "description": "A progressive framework that is easy to learn and integrate, offering a balance of simplicity and power for building single-page applications and UIs."
  },
  {
    "id": 4,
    "title": "Svelte",
    "category": "Framework",
    "description": "A modern framework that compiles code into small, efficient JavaScript bundles, eliminating the need for a virtual DOM and resulting in high performance."
  },
  {
    "id": 5,
    "title": "Ember.js",
    "category": "Framework",
    "description": "A framework focused on convention over configuration, designed for building ambitious single-page applications with a rich user interface."
  },
  {
    "id": 6,
    "title": "jQuery",
    "category": "Library",
    "description": "A fast, small, and feature-rich JavaScript library that simplifies DOM manipulation, event handling, and AJAX."
  },
  {
    "id": 7,
    "title": "Backbone.js",
    "category": "Library",
    "description": "A lightweight library that provides minimal structure for web applications, offering a RESTful JSON interface and event-driven communication."
  },
  {
    "id": 8,
    "title": "Preact",
    "category": "Library",
    "description": "A fast and compact alternative to React with a similar API, prioritizing performance and small file size."
  },
  {
    "id": 9,
    "title": "Semantic UI",
    "category": "Framework",
    "description": "A development framework that uses human-friendly HTML to create responsive and customizable layouts and user interfaces."
  },
  {
    "id": 10,
    "title": "Foundation",
    "category": "Framework",
    "description": "A popular front-end framework that provides a set of tools and features for building responsive, mobile-first websites and web applications."
  }
],
   /*object*/   selectedcard: null
    };

  }
  Handle_Search(e){
    /* multiple inputs=> */ this.setState({[e.target.name]:e.target.value}); 
   /*for single input=>  this.setState({searchkey:e.target.value}); */

  }
  showPanel(card){
    this.setState({selectedcard:card});
  }
  closePanel(){
    this.setState({selectedcard: null});
  }
  render() {
    const {searchkey, cards, selectedcard} = this.state;

    const Filtered_Cards = cards.filter((card)=>{
      const key = card.title.toLowerCase().includes(searchkey.toLowerCase());
      return key;
    });
    return (
      <>
        <header>
          <div className='logo'>Search_Bar & Sliding_Panel</div>
        </header>
        <section>
          <div className='Search_Bar'>
          <input type='text' placeholder='Search cards...' name='searchkey' value={searchkey} onChange={(e)=> this.Handle_Search(e)}/>
          </div>
          <div className='grid'> 
              {Filtered_Cards.map((card)=>(
                <div className='card'
                onClick={()=>this.showPanel(card)}>
                <span>{card.category}</span> 
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                </div>
              ))}
               </div>
          {selectedcard && (
            <div className='overlay' onClick={()=>this.closePanel()}>
              <div className='slidingpanel' onClick={(e)=>e.stopPropagation()}>
                <button  onClick={()=>this.closePanel()}>x</button>
                <h1>{selectedcard.title}</h1>
                <p>{selectedcard.description}</p>
              </div>
               </div> 
          )}
        </section>
        <footer>Copyright @ 2005. All rights reserves.</footer>
      </>
    );
  }
}

export default App;
/*cards =>array map =>pre element it contains 1-10 it is loop */
/* use {}=> to embeded anything */