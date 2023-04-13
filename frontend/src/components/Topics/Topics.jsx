import React from 'react';
import './Topics.css';
import { Topic } from '../../Data/Topic';
import {Link} from "react-router-dom";

const Topics=()=>{
    return(
        <div className="Topics">
            <h2>Search the interseted topics</h2>
            {Topic.map((top)=>{
                return(
                    <div className='top'>
                            <button className='t-button'>
                                <span>{top.name}</span><br/>
                                <span>{top.ques}</span>
                            </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Topics;