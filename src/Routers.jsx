import React from "react";
import {BrowserRouter, Route, Routres, Link} from "react-router-dom";
import {HomePage} from "./HomePage";
import {HabitantProject} from "./HabitantProject";
import {AssistanceProject} from "./AssistanceProject";
import {Registration} from "./Registration";

export function Routers (){
    return <BrowserRouter>
    <Routers>
        <Route path="HomePage" element= {<HomePage/>}/>
        <Route path="Registration" element= {<Registration/>}/>
        <Route path="HabitantProject" element={<HabitantProject/>}/>
        <Route path="AssistanceProject" element={<AssistanceProject/>}/>
    </Routers>
{/* 
    <Link to="HomePage">home link</Link>
    <Link to="HabitantProject">Habitant Project link</Link> */}
  </BrowserRouter>
 ;
}