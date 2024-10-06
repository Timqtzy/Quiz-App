
import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'

export default function App() {

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage />} />
          <Route path='/HomePage' element= {<HomePage />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}


