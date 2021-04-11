import { alternatives } from 'joi';
import React,{useState} from 'react';
const useJobForm=(schema)=>{
    const [state, setstate] = useState({});
    const [errors, setErrors] = useState("");
    const handleSubmit=(event)=>{
        const { error } = schema.validate(state);
        if (!error)
        {
            console.log("Form submitted");
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            };
            fetch('/offers',requestOptions).catch(err=>{alert(err);});
            setstate({});
            setErrors("");
        } 
        else
        {
            event.preventDefault();
            console.log(error);
            setErrors(error);
            alert(errors);
        }
    };
    const handleInputChange=(event)=>{
        setstate({...state,[event.target.name]:event.target.value});
    };
    return {handleSubmit,handleInputChange};
};

export default useJobForm;