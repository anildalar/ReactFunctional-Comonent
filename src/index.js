// Import Area
// Import somting from 'somelibary';

import React from 'react';
import ReactDOM from 'react-dom';


//Create some changes in Virtual DOM (Memory)

//Object.method();
//ReactDOM.render(what,where);

//Create a Class Component

/**
 * class C extends P{
 *      //1. Property
 * 
 *      //2. Constructor
 * 
 *      //3. Method
 * }
 */
//4. Functional Component can contain other Functional Component
let FuncA = ()=><span>Hello FuncA <FuncB /> </span>;
let FuncB = ()=><span>Hello FuncB</span>;

//3. Functional Component can contain Class Companent
class Raj extends React.Component{
     //1. Property

    //2. Constructor

    //3. Method
    render(){
        return <span>Hello Raj</span> 
     }
}


 //2. Class Component can contain other Functional Component
let Kiran = ()=> <span>Hello Kiran <FuncA />  <Raj/> </span>;

//1. Class Component can contain other Class Component
class Vikki extends React.Component{
     //1. Property

    //2. Constructor

    //3. Method
    render(){
        return <span>Hello Vikki <Kiran/></span> 
     }
}

//Class Component must have a render Method
class Ravi extends React.Component{ //inheritance
    //1. Property

    //2. Constructor

    //3. Method
    render(){
       return <h3>Hello Ravi <Vikki/></h3> 
    }
}


//Create Functional Component
//Compoents Always Return HTML

//ES6 Arrow Functions

let Sunil = ()=> <h2>Hello Sunil</h2>;


//Older Way
function Anil(){

    return <h2>Hello Anil</h2>; //JSX Javascript XML
}
//XML Extensible Markup Language
//1. Strict point for XML
// Every Element Must have a closing tag
//Self Closing Tag <Anil />

ReactDOM.render( <Ravi /> ,document.getElementById('root'));

