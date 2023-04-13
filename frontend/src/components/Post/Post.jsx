import React, { useState } from "react";
import "./Post.css";
import pro from "../../img/img1.png";
import axios from "axios";

const Post=({data})=>{
    const ans=data.answer
    const [showans,setans]=useState(false);
    const [answer,setdata]=useState({userId:"641ff2f1be3a463df8fd9a53",answer:""})
    const handlechange=(e)=>{
        setdata({...answer,[e.target.name]:e.target.value})
        console.log(answer)
    }
    const handleshow=()=>{
        setans(true)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(data._id)
        axios.put(`http://localhost:5000/post/${data._id}/answer`,answer).then(function(response){
            console.log(data.id)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="Post">
            <div className="use">
                <img src={pro} alt="" />
                <span><b>{data.username}</b></span>
            </div>
            <h1>{data.question}</h1>
            <div className="postReact">
                <i class="fa-solid fa-heart interact"></i>
                <i class="fa-regular fa-comments interact" onclick={handleshow}></i>
            </div>
            <span style={{color:"var(--grey)",fontSize:"12px"}}>{data.likes.length} likes</span>
            <div className="detail">
                {/* <span>{data.desc}</span> */}
            </div>
            <div className="comment">
                <form onSubmit={handlesubmit} >
                    <img src={pro} alt="" />
                    <input placeholder="give your answer" onChange={handlechange} className="answer"/>
                    <button type="submit" className="answerbutton"><i class="fi fi-rr-paper-plane icomment" ></i></button>
                </form>
            </div>
        </div>
    )
}

export default Post;