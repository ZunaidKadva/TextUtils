import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // whether the dark mode enabled or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }
return(
<>
{/* <Router> */}
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes> */}
    {/* /users --> Components - 1
        /users/home --> --> Components - 2 */}
        {/* <Route exact path="about" element={<About mode={mode}/>}> */}
          {/* <About mode={mode}/> */}
        {/* </Route> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading=" Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
        {/* </Route> */}
  {/* </Routes> */}
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
    {/* <About mode={mode}/> */}
  </div>
  {/* </Router> */}
</>
);
}

export default App;
