import React, { useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import Sectors from './Sectors.jsx';


import './App.css'

function App() {


  return (
    <div className='container'>
      <div className="form">
        <div className='header'>        
</div>
        <form>
        <p>Please enter your name and pick the Sectors you are currently involved in.</p>
          <label htmlFor="">Full Name:
            <br></br>
            <input type="text" placeholder='Enter Your Full Name' />
          </label>
          <br></br>
          <label htmlFor="">Sectors: <br></br></label>
          <Multiselect
            options={Sectors}
            groupBy="group"
            displayValue="title"
            selectionLimit="5"
            showCheckbox={true}
          />
          <br></br>
          <input type="checkbox" name="agree" id="agree" />Agree to terms
          <br></br>
          <button className='save'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default App
