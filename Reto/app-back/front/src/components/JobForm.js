import React from 'react';
import useJobForm from '../hooks/jobFormHooks';
import * as Joi from "joi";

const schema=Joi.object(
    {
        name:Joi.string().regex(/([A-Z a-z 0-9 \s])+/).required(),
        company:Joi.string().regex(/([A-Z a-z 0-9 \s])+/).required(), 
        salary:Joi.string().regex(/([A-Z a-z 0-9 \s])+/).required(),
        city:Joi.string().regex(/([A-Z a-z 0-9 \s])+/).required()
    }
);

const JobForm=()=>{
    const {handleSubmit,handleInputChange}=useJobForm(schema);
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="company">Company: </label>
                    <input type="text" id="company" name="company" onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="salary">Salary: </label>
                    <input type="text" id="salary" name="salary" onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" onChange={handleInputChange}/>
                </div>
                <button type="submit">Create Job</button>
            </form>
        </div>
    );
};

export default  JobForm;