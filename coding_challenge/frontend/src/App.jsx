import React from 'react'
import Mock1 from './InputForm'
import Mock2 from './Result'
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom"
function App() {
    // const { register, handleSubmit, formState: { errors }, control } = useForm();
    // const [cliked, setClicked] = useState(true)

    // let dataaaa = ''
    // const [data, setData] = useState({
    //   firstName: "",
    //   sectorrrs: [],
    //   isagree: false
    // })

    return (
        <Router>
            <div>
                {/* <Link to='/save'>Home</Link> */}

                <Routes>

                    <Route exact path='/' element={<Mock1/>}/>
                    <Route exact path='/save' element={<Mock2/>} />
                    

                </Routes>
            </div>


        </Router>
    )
}

export default App