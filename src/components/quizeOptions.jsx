import React from "react";


export default function QuizeOptions(props) {
    
    return (
        <div className="d-grid gap-3 mx-5">
            {props.options.map(option  =>   <button onClick={()=>{props.selectedAnswer(option)  }} key={option} className="btn btn-dark hoverWhite" type="button">{option}</button>)}
          
           
        </div>
    )
}
