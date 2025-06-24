import React from "react";
import MainFirstPage from "./MainFirstPage";
import MainSecondPage from "./MainSecondPage";
import ContactUs from "../components/ContactUs";

function Main({ onPageLoaded }){
    return(
        <>
            <MainFirstPage onPageLoaded={onPageLoaded}/>
            <MainSecondPage/>
            <ContactUs/>
        </>
    )
}

export default Main;