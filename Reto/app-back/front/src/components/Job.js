import React,{useState} from 'react';

const Job=(props)=>{
    const [state, setstate] = useState(props.offer);
    const renderOffer=()=>{
        return(
            <div>
                <h2>{state.name}</h2>
                <h3>{state.company}</h3>
                <h4>{state.salary}</h4>
                <h5>{state.city}</h5>
            </div>
        );
    };
    return(
        <div>
            {renderOffer()}
        </div>
    );
};

export default Job;