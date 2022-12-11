import React from 'react'
import { Link } from 'react-router-dom'

function Result() {

  let jsonName = JSON.parse(localStorage.getItem('name'))
  console.log(`jsonName ${jsonName.name}`)
  return (
    <div>
      <div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
        <div className="bg-white py-6 px-10 sm:max-w-md w-full App ">
          <p className="font-semibold block py-2">Full Name</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.name}</p>
          <p className="font-semibold block py-2">Sectors</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.sectors[0]}</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.sectors[1]}</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.sectors[3]}</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.sectors[4]}</p>
          <p className="bg-white py-2 px-10 sm:max-w-md w-full App">{jsonName.sectors[5]}</p>
          <Link to='/'>
          <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">Edit</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Result