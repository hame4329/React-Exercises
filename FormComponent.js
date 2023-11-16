import React, {useState} from "react";

function FormComponent () {
    const {name, setName} = useState ('');
    const {email, setEmail} = useState ('');

    function onChange(event) {
        setName (event.target.value);
    }
    function onEmailChange(event) {
        setEmail (event.target.value);
    }


    return (
        <>
        Name:
        <input type="text" onChange={(e)=>onChange(e)}/>
        email:<input type="email" onChange={(e)=>onEmailChange(e)}/>
        <p>output name:{name}</p>
        <p>OutPut Email:{email}</p>
        </>

    );

}

export default FormComponent;