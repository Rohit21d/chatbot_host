import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import background from "./bot.png";

import Chatbot from './chatbot/Chatbot';



const App = () => (

        <div >
          <div style={{ backgroundImage: `url(${background})`, height:'100vh',
        marginTop:'-30px',
        backgroundSize: '1100px',
        backgroundRepeat: 'no-repeat', }}>
       
        <header>
        <h1 style={{fontWeight: 'bold',color:'#cc6699',fontFamily:'Unispace'}}>FAQ ChatBot</h1>
      </header>
      <main>
        <p style={{color:'#000080',fontFamily: 'Monospace'}}>A prototype implementation of the chatbot that can help students find information about courses, 
          academic schedules, student services, and campus life
        </p>
        <p style={{color:'#000080',fontFamily: 'Monospace'}}>
        It can provide instant and accurate answers to frequently asked questions, saving students time and reducing frustration. Moreover, it can be available 24/7, allowing students to access information outside of regular business hours. The chatbot can also help reduce the workload of university staff, freeing them up to focus on more complex tasks.

        </p>
      </main>
       <BrowserRouter>
           <div className="container">
           <Chatbot />
            
               </div>
               
       </BrowserRouter>
    </div>
     </div>
   
)



export default App;