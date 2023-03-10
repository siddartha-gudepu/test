import React from "react";
import "./Post.css";
import pro from "../../img/img1.png";

const Post=({data})=>{
    const AddComment=async(e)=>{
        try{
            const response=await axios.post("/",
                {ques:data,comm:e.target.comm},
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials:true
                }
            ).then(function(response){
                console.log(response.data);
            })
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="Post">
            <form>
                <div className="use">
                    <img src={pro} alt="" />
                    <span><b>{data.name}</b></span>
                </div>
                <h1>{data.ques}</h1>
                <div className="postReact">
                    {data.like?<i class="fa-solid fa-heart interact"></i>:<i class="fa-regular fa-heart interact"></i>}
                    <i class="fa-regular fa-comments interact"></i>
                </div>
                <span style={{color:"var(--grey)",fontSize:"12px"}}>{data.likes} likes</span>
                <div className="detail">

                    <span>{data.desc}</span>
                </div>
                <div className="comment">
                
                    <img src={pro} alt="" />
                    <input placeholder="give your answer" name="comm"/>
                    <i class="fi fi-rr-paper-plane icomment"></i>
                
                </div>
            </form>
        </div>
    )
}

export default Post;