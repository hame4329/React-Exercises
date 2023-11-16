import React, {useState} from "react";

function EventHandlingApp() {
    const {paragraph,setParagraph} =
    useState ('functional component');

    function onClick() {
           setParagraph ('Button Clicked'); 
    }

         return (
    
        <>
            <p>{paragraph}</p>,
            <button onClick={onClick}>click me </button>,
        
         </>
    )
}

export default EventHandlingApp;


