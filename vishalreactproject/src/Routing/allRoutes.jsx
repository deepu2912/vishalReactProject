import React from "react"; 
import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/home";
 


export default function AllRoutes() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} ></Route> 
            </Routes>
        </main>
    )
}