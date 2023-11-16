import {useState} from "react";


function ContactForm(){
    
    const {name,setName} = useState('');
    const {email,setEmail} = useState('');
    const {phone,setPhone} = useState('');
    const {nameError,setNameError} = useState('');
    const {emailError,setEmailError} = useState
    

    
    
    function onNameChange(event){
        setName(event.target.value);
    }

    function onPhoneChange(event) {
        setPhone(event.target.value);
    }
    function onEmailChange(event) {
        setEmail(event.target.value);
    
        function onSubmit(){
        if (!email) {
            setEmailError('Email required');
            return;
            
        }
        if(!name){
            setNameError('Name required');
            return;
            
        }

        console.log (`
            name: ${name}
            email: ${email}
            phone Number: ${phone}
        `)
    
    } 

    return (
        <form onSubmit={onSubmit}>
            name: <input type="text" onChange = {
                (e)=>onNameChange(e)
            }/>
             
            <span>error:(nameError)</span>
            email: <input type="email"
            onChange={(e)=>onEmailChange(e)}
            />
            <span>error:{emailError}</span>
            phone number: <input type="Tel"/>
            <button type="submit">Submit</button>
            </form>


        )
    }
    
    export default ContactForm;