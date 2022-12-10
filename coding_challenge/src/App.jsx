import React, { useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Button, FormField } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import Sectors from './Sectors.jsx';


// import './App.css'

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    
      <div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">     
<Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
        <p className='text-red-900 text-xl'>Please enter your name and pick the Sectors you are currently involved in.</p>
        <br></br>
          <label className="font-semibold block py-2" htmlFor="">Full Name<span>*</span></label>
            
            <input 
            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
            type="text" 
            placeholder='Enter Your Full Name' 
            {...register("firstName", {
              required:true, maxLength: 20
              
            }) }
            />


        </Form.Field>
        {errors.fullName && <p className = "hover:red-yellow-500 w-full mb-2 select-none border-l-4 border-red-400 bg-red-100 p-4 font-medium">Please check your Name</p>}
        
          <br></br>
          <Form.Field>
          <label className="font-semibold block py-2" htmlFor="">Sectors<span>*</span> <br></br></label>
           <Multiselect
            options={Sectors}
            groupBy="group"
            displayValue="title"
            selectionLimit="5"
            showCheckbox={true}
            {...register("sectors", { required: true})}
            
          />  
          </Form.Field>
          {errors.sectors && <p className='hover:red-yellow-500 w-full mb-2 select-none border-l-4 border-red-400 bg-red-100 p-4 font-medium'>Please select the sectors you are currently involved in</p>}
          <br></br>
          <Form.Field>
          <input 
          type="checkbox" 
          name="agree" 
          id="agree"
          {...register("agreement", { required: 'Agreement is required' })}
          /> Agree to terms<span>*</span>
          </Form.Field>
          {errors.agreement && <p className=' w-full mb-2 select-none border-l-4 border-red-400 bg-red-100 p-4 font-medium'>Agreement is required</p>}
          <br></br>
          <div class="flex justify-center my-6">
                <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Save
                </button>
              </div>
       
          </Form>
      </div>
    </div>
  )
}

export default App
