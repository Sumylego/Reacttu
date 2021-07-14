import React from 'react';
const programmer = 'react js';
const pro = 'PUBG';
const App = () =>{
    return (
     <>
     <div className = 'main_div'>
      <div className = 'center_div'>
      <br />
      <h1>ToDo Lists</h1>
        <br />
      <input type="text" placeholder="Add a items" />
      <button> + </button>
      <ol>
      <li>Buy apple</li>
      </ol>
      </div>
      </div>

     </>      
    );
}
export default App;
export {programmer,pro};