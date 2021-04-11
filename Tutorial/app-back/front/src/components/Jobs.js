import React,{useEffect,useState} from 'react';
import Job from './Job';

const JobList=()=>{
    const [state, setState] = useState({offers: []});
    useEffect(()=>{
        const url='/offers';
        fetch(url).then(res=>{
            return res.json();
        }).then(offers=>{
            setState({ offers });
            console.log(state);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(
        <div>
            <h1>
                Jobs
            </h1>
            <ul>
                {state.offers.map((e,i)=>(
                    <li>
                        <Job key={i} offer={e}></Job>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;