import React from "react";
import './AdvantageParagraph.css';

function AdvantageParagraph(props){
    return(
        <div className="advantage-paragraph">
            <h3 className="icon-text"><i className="fa-solid fa-truck" style={{color:"#d8a64e"}}></i>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default AdvantageParagraph;