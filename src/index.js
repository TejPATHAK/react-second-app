import React from "react";
import ReactDOM from "react-dom/client";


var myroot = ReactDOM.createRoot(document.getElementById("root"));

const myname = "Tejaswi"
const mylast = "Pathak"

myroot.render(
  <div>
    <h1>{ myname} {mylast}</h1>

    <h1>{myname + " " + mylast }</h1>

    <h2> Add:       100 + 50 = <b> {100+50} </b> </h2>
    <h2> Substract: 300 - 50 = <b> {300-30} </b> </h2>
    <h2> Divide:    200 / 20 = <b> {200/20} </b> </h2>
    <h2> Multiply:  25*30    =<b>  {25*30}  </b> </h2>

    <div>
        Performing Mathematical Calculations!
       </div>
    <div>
       <h3> hey! Learning React.js  { Math.floor (Math.random() *100 ) } </h3>
       </div>
       
  </div>
);