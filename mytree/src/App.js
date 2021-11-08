import React from "react";
import Tree from "./components/Tree";
import './App.css'
import {data} from './data'

function App() {
  return (
    <div className="container">
      <h1>Alterable Tree</h1>
      <Tree items={data}/>
    </div>
  );
}

export default App;
