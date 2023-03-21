import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Chatbot from './chatbot/Chatbot';



const App = () => {
    return (
        <div>
        Webpage
               <BrowserRouter>
           <div>
               <Chatbot />
           </div>
       </BrowserRouter></div>
    )
}


export default App;