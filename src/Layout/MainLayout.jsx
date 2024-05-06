import React from "react";
import Navbar from "../components/Navbar"
import Body from "../components/body";
function MainLayout({body,header}){
    return(
        <div>
            <Navbar></Navbar>
        </div>
    );
}

export default MainLayout;