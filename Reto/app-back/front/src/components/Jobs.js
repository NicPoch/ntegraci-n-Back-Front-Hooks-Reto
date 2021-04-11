import React,{useEffect,useState} from 'react';
import Job from './Job';
import JobForm from './JobForm';

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
            <header>
                <h1>
                    Jobs
                </h1>
            </header>
            <main>
                <section>
                    <h2>
                        Offers
                    </h2>
                    <ul>
                        {state.offers.map((e,i)=>(
                            <li>
                                <Job key={i} offer={e}></Job>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>
                        Create a Job Offer
                    </h2>
                    <JobForm></JobForm>
                </section>
            </main>
            
        </div>
    );
};

export default JobList;