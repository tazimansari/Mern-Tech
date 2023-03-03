import { useState } from 'react';
import './App.css';
import pic1 from './pic1.jpg'

function App() {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");

  return (
    <div className='main-cont'>
      <div className="large-cont">
        <div className='bg-image'>
          <img src={pic1} alt="jhgj"/>
        </div>
        <div className='container-2'>
          <div>
            <div className='input-cont'>
              <div className='header'>
                <p className='header-1'>ALREADY MEMBERS</p>
                <p className='header-2'>Need help?</p>
              </div>
              <div className='form'>
                <input className='text-1' type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input className='text-2' type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button className='btn'>SIGN IN</button>
              </div>
            </div>
            <div>
              <p className='footer-1'>Don't have an account yet ?</p>
              <span className='footer-2'>Create an account</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
