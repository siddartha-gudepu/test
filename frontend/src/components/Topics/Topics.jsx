import React from 'react';
import './Topics.css';
import { Topic } from '../../Data/Topic';
import {Link} from "react-router-dom";

const Topics=()=>{
    return(
        <div className="Topics">
            <h2>Search the interseted topics</h2>
                    <div className='top'>
                        <Link to="/college">
                            <button className='t-button'>
                                <span>college</span><br/>
                                <span>100</span>
                            </button>
                        </Link>
                    </div>
                    <div className='top'>
                        <Link to="/events">
                            <button className='t-button'>
                                <span>events</span><br/>
                                <span>100</span>
                            </button>
                        </Link>
                    </div>
                    <div className='top'>
                        <Link to="/hostel">
                            <button className='t-button'>
                                <span>hostel</span><br/>
                                <span>100</span>
                            </button>
                        </Link>
                    </div>
                    <div className='top'>
                        <Link to="/coding">
                            <button className='t-button'>
                                <span>coding</span><br/>
                                <span>100</span>
                            </button>
                        </Link>
                    </div>
        </div>
    )
}

export default Topics;