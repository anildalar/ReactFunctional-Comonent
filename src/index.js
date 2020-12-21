// Import Area
//Import {Someting} From 'Somelibrary1';
//Import Someting2 From 'Somelibrary2';

import React from 'react';
import ReactDOM  from 'react-dom';

//let x=<h1>Hello</h1>; // JSX 
//Fat Arrow Function
let MyComponentD = ()=> <span> I am Fine Thanks</span>;

let MyComponentC = ()=>{
    //We know that Functional Component Must return HTML
    //So we use return Keyword
    return <span> How are you? <MyComponentD /> </span>
} 

function MyComponentB(){
    return <span>Anil <MyComponentC /></span>;
}
function MyComponentA(){
    //functional Component Always Return HTML
    //Lets Place the second functional Companent inside this companent
    return <h1>Hello <MyComponentB></MyComponentB></h1>;
}

//Manupulation in Virtual DOM
//ReactDOM.render(whatelement,wheretoplace);
ReactDOM.render(<MyComponentA></MyComponentA>,document.getElementById('root'));